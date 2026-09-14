import React from 'react'
import styles from '@/app/ui/dashboard/products/add/addProduct.model.css'

const AddProduct = () => {
  return (
    <div className="bg-bgSoft p-5 rounded-[10px] mt-5">
      <form action="" className='flex flex-wrap justify-between'>
        <input type="text" placeholder='title' name="title" required />
        <select name="category" id="category">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder='price' name='price' />
        <input type="number" placeholder='Stock no' name='stock' />
        <input type="text" placeholder='Color' name='color' />
        <input type="text" placeholder='Size' name='size' />

        <textarea
          name="descri"
          id="descri"
          rows="6"
          placeholder='Description'
        >

        </textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProduct
