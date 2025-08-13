'use client'
import React, { useState } from 'react';
import 'react-quill-new/dist/quill.snow.css';


import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import dynamic from 'next/dynamic';
import { Button } from '../ui/button';

const ReactQuill = dynamic(() => import('react-quill-new'), {ssr: false})

const CreateArticle = () => {
    const [content, setContent] = useState('');
    return (
        <main className='max-w-4xl mx-auto p-6'>
            <Card>
                <CardHeader>
                    <CardTitle>Create your Article</CardTitle>
                </CardHeader>
                <CardContent>

                    <form action="" className='space-y-6'>
                        <div className='space-y-2'>
                            <Input type='text' name='title' placeholder='Enter your title' />
                        </div>
                        <div className='space-y-4'>
                            <label htmlFor="">Category</label>
                            <select className='flex h-10 rounded-md w-full mt-2 px-2'>
                                <option value="">Select Category</option>
                                <option value="technology">Technology</option>
                                <option value="programming">Programming</option>
                                <option value="web-development">Web Development</option>
                            </select>
                        </div>


                        <div className='space-y-2'>
                            <label htmlFor="featuredImage">Featured Image</label>
                            <Input
                                type='file'
                                id='featuredImage'
                                name='featuredImage'
                                accept='/image/*'
                            />
                        </div>

                        <div className='space-y-2'>
                            <label>Content</label>
                            <ReactQuill theme="snow" value={content} onChange={setContent} />
                        </div>

                        <div className='flex justify-end gap-2'>
                            <Button>Cancel</Button>
                            <Button>Publish Article</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}

export default CreateArticle
