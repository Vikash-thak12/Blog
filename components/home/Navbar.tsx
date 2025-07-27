import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import SearchInput from './searchInput'
import ToggleMode from './toggleMode'

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-2xl'>
            <div className='flex items-center justify-between px-4 py-4'>

                {/* left section */}
                <div className='flex items-center gap-1'>
                    <Link href={"/"}>
                        <span>Blog</span>
                        <span>Application</span>
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
                <div className='flex items-center gap-4'>

                    <SearchInput />
                    <ToggleMode />

                    <div className='hidden md:flex items-center gap-2'>
                        <Button>Login</Button>
                        <Button>Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
