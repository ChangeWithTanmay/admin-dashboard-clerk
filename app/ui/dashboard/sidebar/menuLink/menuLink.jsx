"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuLink = ({ item }) => {
    const pathname = usePathname()

    console.log(pathname)
    return (
        <Link href={item.path} className={`flex items-center p-3 gap-2.5 my-1 mx-0  rounded-[10px] hover:bg-[#2e374a]   ${pathname === item.path && "active:bg-[#2e374a]"}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink
