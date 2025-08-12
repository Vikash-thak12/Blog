import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'

const RecentArticles = () => {
  return (
    <main className='mt-5'>
        <Card>
            <CardHeader className='flex items-center justify-between'>
                <CardTitle>Recent Articles</CardTitle>
                <Button className='cursor-pointer'>View All <MoveRight /></Button>
            </CardHeader>

            <CardContent>
                
            </CardContent>
        </Card>
    </main>
  )
}

export default RecentArticles
