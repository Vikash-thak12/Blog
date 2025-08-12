import { FileText, MessageCircle, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import RecentArticles from './recentArticles'


const BlogApp = () => {
  return (
    <main className='flex-1 p-4'>
      <div className='flex items-center justify-between'>
        <div className=''>
          <h1 className='font-bold text-2xl'>Blog Application</h1>
          <p className='font-semibold text-gray-500'>Manage your blogs and Analytics</p>
        </div>
        <Link href={"/dashboard/articles/create"}>
          <Button className='cursor-pointer'><PlusCircle /> Create new Article</Button>
        </Link>
      </div>

      {/* quick stats */}
      <div className='mt-5 grid grid-cols-3 gap-5'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-0 py-2'>
            <CardTitle>Total Articles</CardTitle>
            <FileText />
          </CardHeader>
          <CardContent>
            <div>23 Articles</div>
            <p>+5 from last months.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-0 py-2'>
            <CardTitle>Total Comments</CardTitle>
            <MessageCircle />
          </CardHeader>
          <CardContent>
            <div>5 Comments</div>
            <p>+2 last week.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-0 py-2'>
            <CardTitle>Average Rating</CardTitle>
            <FileText />
          </CardHeader>
          <CardContent>
            <div>3.5</div>
            <p>10% Improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* RecentArticles */}
      <RecentArticles />
    </main>
  )
}

export default BlogApp
