'use client'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { BarChart, FileText, LayoutDashboard, MessageCircle, Settings } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import { useState } from "react"

const LeftSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <main className='md:max-w-[250px] h-screen'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant={"outline"} className="md:hidden m-4">
                        <LayoutDashboard />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[250px]">
                    <DashboardSideBar />
                </SheetContent>
            </Sheet>

            <div className="hidden md:block border-r border-gray-500 h-screen">
                <DashboardSideBar />
            </div>
        </main>
    )
}

export default LeftSideBar;



// this is for mobile side bar 
const DashboardSideBar = () => {
    return (
        <div className="h-full px-4 py-6">
            <div className="flex items-center gap-2 mb-8 px-2">
                <Link href={"/"}>
                    <span className="text-xl font-bold">Blog Application</span>
                </Link>
            </div>
            <nav className="space-y-2">
                <div>
                    <Link href={"/dashboard"}>
                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                        >
                            <LayoutDashboard className="mr-2 h-4 w-4" />
                            Overview
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link href={"/dashboard/articles/create"}>
                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                        >
                            <FileText className="mr-2 h-4 w-4" />
                            Articles
                        </Button>
                    </Link>
                </div>
                <Button
                    variant="ghost"
                    className="w-full justify-start"
                >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Comments
                </Button>
                <Button
                    variant="ghost"
                    className="w-full justify-start"
                >
                    <BarChart className="mr-2 h-4 w-4" />
                    Analytics
                </Button>
                <Button
                    variant="ghost"
                    className="w-full justify-start"
                >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                </Button>
            </nav>
        </div>
    )
}