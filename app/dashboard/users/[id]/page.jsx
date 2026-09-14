import Image from 'next/image'
import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'

const SingleUserPage = () => {
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
                    <label>Username</label>
                    <input type="username" name='username' placeholder='John Doe' />

                    <label>Email</label>
                    <input type="email" name='email' placeholder='johndoe@xyz.com' />

                    <label>Password</label>
                    <input type="password" name='password'  />

                    <label>phone</label>
                    <input type="phone" name='phone' placeholder='+91 1234567890' />

                    <label>Address</label>
                    <textarea name="address" id="address" placeholder='Kolkata' />

                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage