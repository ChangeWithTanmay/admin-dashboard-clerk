import React from 'react'
import styles from '@/app/ui/dashboard/users/add/addUser.model.css'
import { addUser } from '@/app/lib/actions'


const AddUserPage = () => {
  return (
    <div className="bg-bgSoft p-5 rounded-[10px] mt-5">
      <form action={addUser} className={`flex flex-wrap justify-between`}>
        <input type="text" placeholder='username' name="username" required />
        <input type="email" placeholder='email' name="email" required />
        <input type="password" placeholder='Password' name="password" required />
        <input type="phone" placeholder='Phone' name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} >Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value={true} >Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

       

        <textarea
          name="address"
          id="address"
          rows="4"
          placeholder='Address'
        >

        </textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
