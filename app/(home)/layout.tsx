import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  // needs to change 
  if (!user) {
    return <div>{children}</div>;
  }

  const loggedInUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id }
  })

  if (!loggedInUser) {
    await prisma.user.create({
      data: {
        name: user.fullName,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
        clerkUserId: user.id,
      }
    })
  }
  return (
    <div>
      {children}
    </div>
  )
}

export default layout
