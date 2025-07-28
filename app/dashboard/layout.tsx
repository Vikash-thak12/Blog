import LeftSideBar from '@/components/dashboard/leftSide'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "DashBoard Page",
  description: "Here You will find all the details related to dashboard",
};

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-screen w-full'>
            <div className='flex'>
                <LeftSideBar />
                <div className='flex-1'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout
