import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export async function TopArticles() {

    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 overflow-hidden mt-5">
            <Card
                className={cn(
                    "group relative overflow-hidden transition-all hover:scale-[1.02]",
                    "border border-gray-200/50 dark:border-white/10",
                    "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
                )}
            >
                <div className="p-4">
                    <Link href={`/articles`}>
                        {/* Image Container */}
                        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                            <Image
                                src={"https://images.unsplash.com/photo-1682685797736-dabb341dc7de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                alt={"Articles"}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Author Info */}
                        <div className="shadow-md shadow-gray-500 rounded-2xl p-2">
                            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={"https://images.unsplash.com/photo-1682685797736-dabb341dc7de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                                </Avatar>
                                <span>Vikash Thakur</span>
                            </div>

                            {/* Article Title */}
                            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                                <span>Title:</span> Hello World
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                <span className="font-bold text-black">Category:</span> Normal
                            </p>

                            {/* Article Meta Info */}
                            <div className="mt-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                <span>12th October</span>
                                <span>{12} min read</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </Card>
        </div>
    );
}