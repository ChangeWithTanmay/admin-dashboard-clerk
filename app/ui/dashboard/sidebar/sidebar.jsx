import React from 'react'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from 'react-icons/md'
import MenuLink from './menuLink/menuLink'
import Image from 'next/image'

const menuItem = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            },
        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />
            }
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />
            }
        ]
    }
]

const Sidebar = () => {
    return (
        <div className='sticky top-40'>

            {/* User Icon & Name */}
            <div className='flex items-center gap-5 mb-5 '>
                <Image src={"/image.png"} alt='' width="50" height="50" className='rounded-xl object-cover'/>
                <div className='flex flex-col'>
                    <span className='font-medium'>Jhon Doe</span>
                    <span className='text-xs'>Administrator</span>
                </div>
            </div>


            <ul className='list-none'>
                {menuItem.map(
                    menu => (
                        <li key={menu.title}>
                            <span className='text-textSoft font-bold text-xs'>{menu.title}</span>
                            {menu.list.map(item => <MenuLink item={item} key={item.title} />)}
                        </li>
                    )
                )}
            </ul>
            <button className='p-3 gap-2.5 my-1 mx-0 flex items-center rounded-[10px] bg-none text-text border-none cursor-pointer w-full hover:bg-[#2e374a]'>
                <MdLogout/>
                Logout</button>
        </div>
    )
}

export default Sidebar