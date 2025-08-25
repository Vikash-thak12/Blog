'use client'
import React, { FormEvent, startTransition, useActionState, useState } from 'react';
import 'react-quill-new/dist/quill.snow.css';


import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import dynamic from 'next/dynamic';
import { Button } from '../ui/button';
import { createArticle } from '@/actions/create-article';
import { Articles } from '@/app/generated/prisma';
import { EditArticle } from '@/actions/edit-article';

type ArtileProps = {
    article: Articles; 
}

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

const EditArticlePage: React.FC<ArtileProps> = ({ article }) => {
    const [content, setContent] = useState(article.content);
    const [formState, action, isPending] = useActionState(EditArticle.bind(null, article.id), { errors: {} });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget); 
        formData.append('content', content); 
        startTransition(() => {
            action(formData); 
        })
    }; 
    
    return (
        <main className='max-w-4xl mx-auto p-6'>
            <Card>
                <CardHeader>
                    <CardTitle>Edit your Article</CardTitle>
                </CardHeader>
                <CardContent>

                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div className='space-y-2'>
                            <Input type='text' name='title' defaultValue={article.title} placeholder='Enter your title' />
                            {
                                formState.errors.title && <span className='text-red-600'>{formState.errors.title}</span>
                            }
                        </div>
                        <div className='space-y-4'>
                            <label htmlFor="category">Category</label>
                            <select name='category' defaultValue={article.category} className='flex h-10 rounded-md w-full mt-2 px-2'>
                                <option id='category' value="">Select Category</option>
                                <option id='category' value="technology">Technology</option>
                                <option id='category' value="programming">Programming</option>
                                <option id='category' value="web-development">Web Development</option>
                            </select>
                            {
                                formState.errors.category && <span className='text-red-600'>{formState.errors.category}</span>
                            }
                        </div>


                        <div className='space-y-2'>
                            <label htmlFor="featuredImage">Featured Image</label>
                            <Input
                                type='file'
                                id='featuredImage'
                                name='featuredImage'
                                accept='image/*'
                            />
                            <div>
                                {
                                    article.featuredImage && (
                                        <img src={article.featuredImage} alt="image" className='w-50 h-50 rounded-md' />
                                    )
                                }
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <label>Content</label>
                            <ReactQuill theme="snow" value={content} defaultValue={article.content} onChange={setContent} />
                            {
                                formState.errors.content && <span className='text-red-600'>{formState.errors.content}</span>
                            }
                        </div>

                        <div className='flex justify-end gap-2'>
                            <Button>Cancel</Button>
                            <Button type='submit' disabled={isPending}>
                                {
                                    isPending ? "Loading.." : "Edit"
                                }
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}

export default EditArticlePage
