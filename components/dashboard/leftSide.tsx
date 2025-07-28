import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { LayoutDashboard } from "lucide-react"

const LeftSideBar = () => {
    return (
        <main className='w-[250px] bg-gray-500 h-screen'>
            <Sheet>
                <SheetTrigger>
                    <LayoutDashboard />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </main>
    )
}

export default LeftSideBar
