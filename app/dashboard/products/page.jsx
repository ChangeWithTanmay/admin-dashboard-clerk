import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductPage = () => {
  return (
    <div className="bg-bgSoft p-5 rounded-[10px] mt-5">
      {/* Top component */}
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a Product" />
        <Link href="/dashboard/products/add">
          <button className='p-2.5 bg-[#5d57c9] text-text border-none rounded-[5px] cursor-pointer'>Add New</button>
        </Link>
      </div>

      <table className="w-full p-2.5">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-1.5">
                <Image src={"/avater2.jpg"} alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
                I-Phone 13
              </div>
            </td>
            <td className='max-w-50 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi suscipit facilis ratione, totam soluta nihil assumenda deleniti, commodi maiores reiciendis eos corporis sed temporibus dolorem natus laborum. Repellat, labore.</td>
            <td>$123</td>
            <td>Oct 29 2023</td>
            <td>34</td>
            <td>
              <div className="flex gap-2.5">
                <Link href="/">
                  <button className='button view'>View</button>
                </Link>
                <Link href="/">
                  <button className='button delete'>Delete</button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default ProductPage
