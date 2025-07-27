'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import SearchInput from './searchInput'
import ToggleMode from './toggleMode'
import { X, Menu, Search, Flag } from 'lucide-react'
import { Input } from '../ui/input'

const Navbar = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    return (
        <div className='sticky top-0 z-100 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='flex items-center justify-between px-4 max-sm:px-2 py-4'>

                {/* left section */}
                <div className='flex items-center'>
                    <Link href={"/"}>
                        <span>Blog</span>
                        <span>App</span>
                    </Link>
                </div>

                {/* desktop menu */}
                <div className='hidden md:flex items-center gap-4'>
                    <Link href={"/articles"}>
                        Articles
                    </Link>
                    <Link href={"/tutorial"}>
                        Tutorial
                    </Link>
                    <Link href={"/about"}>
                        About
                    </Link>
                    <Link href={"/dashboard"}>
                        Dashboard
                    </Link>
                </div>


                {/* right section */}
                <div className='flex items-center gap-2'>

                    <SearchInput />
                    <ToggleMode />

                    <Button className='md:hidden' variant={'ghost'} onClick={() => setIsMobileMenu(!isMobileMenu)}>
                        {
                            isMobileMenu ? (
                                <X />
                            ) : (
                                <Menu />
                            )
                        }
                    </Button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenu && (
                <div className="md:hidden absolute top-0 w-full py-4 space-y-4 border-t bg-background">
                    <Button variant={"ghost"} className='absolute top-0 right-0' onClick={() => setIsMobileMenu(false)}>
                        <X className='z-110' />
                    </Button>
                    {/* Search Bar (Mobile) */}
                    <div className='mt-5'>
                        <div className="px-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search articles..."
                                    className="pl-10 w-full focus-visible:ring-1"
                                />
                            </div>
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="space-y-2 px-4">
                            <Link
                                href="/articles"
                                className="block px-3 py-2 text-base font-medium text-foreground"
                                onClick={() => setIsMobileMenu(false)}
                            >
                                Articles
                            </Link>
                            <Link
                                href="/tutorials"
                                className="block px-3 py-2 text-base font-medium text-foreground"
                                onClick={() => setIsMobileMenu(false)}
                            >
                                Tutorials
                            </Link>
                            <Link
                                href="/about"
                                className="block px-3 py-2 text-base font-medium text-foreground"
                                onClick={() => setIsMobileMenu(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/dashboard"
                                className="block px-3 py-2 text-base font-medium text-foreground"
                                onClick={() => setIsMobileMenu(false)}
                            >
                                Dashboard
                            </Link>
                        </div>

                        {/* Mobile Auth Buttons */}
                        {/* <SignedOut>
                                <div className="px-4 flex flex-col gap-2">
                                    <SignInButton>
                                        <Button variant="outline" className="w-full">
                                            Login
                                        </Button>
                                    </SignInButton>
                                    <SignUpButton>
                                        <Button className="w-full">Sign up</Button>
                                    </SignUpButton>
                            </SignedOut> */}
                    </div>
                </div>
            )}
        </div>

    )
}

export default Navbar
