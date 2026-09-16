import { fetchUsers } from '@/app/lib/data'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserPage = async ({searchParams}) => {

  const params = await searchParams;
  const q = params?.q || "";
  const page = params?.page <=0 ? 1: params?.page || 1;

  const {users, count} = await fetchUsers(q, page)


  return (
    <div className="bg-bgSoft p-5 rounded-[10px] mt-5">
      {/* Top component */}
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user.." />
        <Link href="/dashboard/users/add">
          <button className='p-2.5 bg-[#5d57c9] text-text border-none rounded-[5px] cursor-pointer'>Add New</button>
        </Link>
      </div>

      <table className="w-full p-2.5">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <div className="flex items-center gap-1.5">
                  <Image src={user.img || "/avater2.jpg"} alt='' width={40} height={40} className='w-10 h-10 rounded-lg object-cover' />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              
              <td>{user.createdAt?.toString().slice(4, 16)}</td>

              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className="flex gap-2.5">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className='button view'>View</button>
                  </Link>
                  <Link href="/">
                    <button className='button delete'>Delete</button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default UserPage
