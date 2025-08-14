'use server'

import { stripHtml } from "@/lib/content";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { z } from "zod";

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

    redirect("/dashboard")
}