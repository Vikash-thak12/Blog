import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'
const SearchInput = () => {
  return (
    <form action="">
        <div className='relative'>
            <Search className='absolute left-3 top-2.5 h-4 w-4' />
            <Input type='text' name='search' placeholder='Search Articles' className='pl-10 w-48 focus-visible:ring-1' />
        </div>
    </form>
  )
}

export default SearchInput
