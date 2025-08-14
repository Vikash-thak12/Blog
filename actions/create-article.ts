'use server'

import { stripHtml } from "@/lib/content";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { z } from "zod";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const articleSchema = z.object({
    // title: z.string(),
    title: z.string().min(2, { message: "Title must be at least 3 characters" }).max(100),
    category: z.string().min(2, { message: "Category is required" }).max(50),
    content: z
        .string()
        .transform((val) => stripHtml(val)) // Clean HTML first
        .refine((val) => val.length > 0, { message: "Content cannot be empty" }),
});

type CreateformArticleState = {
    errors: {
        title?: string[],
        category?: string[],
        featuredImage?: string[],
        content?: string[],
        formErrors?: string[]
    }
}

export const createArticle = async (prevState: CreateformArticleState, formData: FormData): Promise<CreateformArticleState> => {
    const result = articleSchema.safeParse({
        title: formData.get('title'),
        category: formData.get('category'),
        content: formData.get('content')
    })

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    const { userId } = await auth();
    if (!userId) {
        return {
            errors: {
                formErrors: ["you have to login first"]
            }
        }
    }

    const existingUser = await prisma.user.findUnique({
        where: {clerkUserId: userId}
    })

    if(!existingUser){
        return {
            errors: {
                formErrors: ["User not found, Please register before creating article.."]
            }
        }
    }

    // cloudinay for image 
    const imageFile = formData.get('featuredImage') as File | null; 
    if(!imageFile || imageFile.name === "undefined"){
        return {
            errors: {
                featuredImage:["Image file is required"]
            }
        }
    }


    const arrayBuffer = await imageFile.arrayBuffer(); 
    const buffer = Buffer.from(arrayBuffer); 

    const uploadResponse: UploadApiResponse | undefined = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {resource_type: 'auto'}, 
            (error, result) => {
                if(error){
                    reject(error)
                } else {
                    resolve(result)
                }
            }
        )
        uploadStream.end(buffer)
    })

    const imageUrl = uploadResponse?.secure_url; 
    if(!imageUrl){
        return {
            errors: {
                featuredImage:["Failed to upload imageUrl"]
            }
        }
    }

    try {
        await prisma.articles.create({
            data: {
                title: result.data.title, 
                category: result.data.category, 
                content: result.data.content, 
                featuredImage: imageUrl, 
                authorId: existingUser?.id,
            }
        })
    } catch (error: unknown) {
        if(error instanceof Error){
            return{
                errors: {
                    formErrors: [error.message]
                }
            }
        } else {
            return{
                errors: {
                    formErrors: ['Some internal server error']
                }
            }
        }
    }


    revalidatePath("/dashboard")  // this will refresh this route to get the updated data
    redirect("/dashboard")
}