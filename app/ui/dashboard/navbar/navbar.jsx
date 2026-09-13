"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className='
         flex 
         items-center 
         justify-between
         p-3
         rounded-[10px]
         bg-bgSoft
         '>
            <div className='text-textSoft font-bold capitalize'>{pathname.split('/').pop()}</div>

            <div className="flex items-center gap-5">

                {/* search bar */}
                <div className="flex items-center gap-2.5 rounded-[10px] bg-[#2e374a] p-1.25">
                    <MdSearch size={20}/>
                    <input type="text" placeholder='Search..' className='bg-transparent border-none text-text' />
                </div>

                <div className="flex gap-5">
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar