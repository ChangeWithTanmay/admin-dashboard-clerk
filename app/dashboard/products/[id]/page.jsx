import Image from 'next/image'
import React from 'react'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'

const SingleProductPage = () => {
    return (
        <div className="flex gap-5">
            {/* Info container */}
            <div className="flex-1 bg-bgSoft p-5 rounded-[10px] mt-5 font-bold text-textSoft h-max">
                <div className="w-72 h-72 relative rounded-2xl overflow-hidden">
                    <Image src={"/image.png"} alt='' fill  />
                </div>

                John Doe
            </div>

            {/* form container */}
            <div className="flex-3 bg-bgSoft p-5 rounded-[10px]">
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name='title' placeholder='Title' />

                    <label>Price</label>
                    <input type="number" name='price' placeholder='' />

                    <label>Stock</label>
                    <input type="number" name='stock' placeholder='20' />

                    <label>Color</label>
                    <input type="text" name='color' placeholder='red' />

                    <label>Size</label>
                    <input type="text" name='size' placeholder='red' />

                    <label>Category</label>
                    <select name="category" id="isAdmin">
                        <option value={"kitchen"}>Kitchen</option>
                        <option value={"computer"}>Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name="description" id="description" rows={"10"} placeholder='description..' />
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage