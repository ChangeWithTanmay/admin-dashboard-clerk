import { fetchProducts } from '@/app/lib/data'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductPage = async ({searchParams}) => {

  const params = await searchParams;
  const q = params?.q || "";
  const page = params?.page <= 0 ? 1 : params?.page || 1;

  const { products, count } = await fetchProducts(q, page)

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
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
          <tr key={product?.id}>
            <td>
              <div className="flex items-center gap-1.5">
                <Image src={ product?.img || "/avater2.jpg"} alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
                {product?.title || ""}
              </div>
            </td>
            <td className='max-w-50 truncate'>{product.desc || ""}</td>
            <td>{`$${product?.price || 0}`}</td>
            <td>{product?.createdAt?.toString().slice(4, 16)}</td>
            <td>{product?.stock || 0}</td>
            <td>
              <div className="flex gap-2.5">
                <Link href={`/dashboard/products/${product?.id}`}>
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
      <Pagination count={count} />
    </div>
  )
}

export default ProductPage
