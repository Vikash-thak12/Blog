import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { Prisma } from '@/app/generated/prisma'

type ArticleWithAuthorProps = {
    articles: Prisma.ArticlesGetPayload<{
        include: {
            comments: true,
            author: {
                select: {
                    name: true;
                    email: true;
                    imageUrl: true;
                };
            };
        };
    }>[];
}

const RecentArticles: React.FC<ArticleWithAuthorProps> = ({ articles }) => {
    return (
        <main className='mt-5'>
            <Card>
                <CardHeader className='flex items-center justify-between'>
                    <CardTitle>Recent Articles</CardTitle>
                    <Button className='cursor-pointer'>View All <MoveRight /></Button>
                </CardHeader>

                {
                    !articles.length ? (
                        <CardContent className='text-center'>No Articles Found</CardContent>
                    ) : (
                        <CardContent>
                            <Table>
                                <TableCaption>A list of your recent invoices.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[200px]">Title</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Comments</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        articles.map((article) => (
                                            <TableRow key={article.id}>
                                                <TableCell className="font-medium">{article.title}</TableCell>
                                                <TableCell><Badge variant="destructive">Published</Badge></TableCell>
                                                <TableCell>{article.comments.length}</TableCell>
                                                <TableCell>{article.createdAt.toDateString()}</TableCell>
                                                <TableCell>
                                                    <div className='flex items-center gap-2'>
                                                        <Link href={`/dashboard/articles/${article.id}/edit`}>
                                                            <Button className='cursor-pointer'>Edit</Button>
                                                        </Link>
                                                        <DeleteButton />
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }

                                </TableBody>
                            </Table>
                        </CardContent>
                    )
                }


            </Card>
        </main>
    )
}

export default RecentArticles

const DeleteButton = () => {
    return (
        <main>
            <Button>Delete</Button>
        </main>
    )
}
