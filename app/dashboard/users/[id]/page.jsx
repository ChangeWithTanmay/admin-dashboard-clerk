import Image from 'next/image'
import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import { fetchUser, updateUser } from '@/app/lib/actions'

const SingleUserPage = async({params}) => {
    const {id} = await params
    const user = await fetchUser(id)
    return (
        <div className="flex gap-5">
            {/* Info container */}
            <div className="flex-1 bg-bgSoft p-5 rounded-[10px] mt-5 font-bold text-textSoft h-max">
                <div className="w-72 h-72 relative rounded-2xl overflow-hidden">
                    <Image src={user.img || "/image.png"} alt='' fill  />
                </div>

                 {user.username}
            </div>

            {/* form container */}
            <div className="flex-3 bg-bgSoft p-5 rounded-[10px]">
                <form action={updateUser} className={styles.form}>
                    <input name='id' readOnly value={user.id} hidden />
                    <label>Username</label>
                    <input type="username" name='username' placeholder={user.username} />

                    <label>Email</label>
                    <input type="email" name='email' placeholder={user.email} />

                    <label>Password</label>
                    <input type="password" name='password'  />

                    <label>Phone</label>
                    <input type="phone" name='phone' placeholder={user.phone || "9876543210"} />

                    <label>Address</label>
                    <textarea name="address" id="address" placeholder={user.address || "Barakathalia, Barrackpur, North 24 Parganas, West Bengle, 700001"} />

                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin" defaultValue={String(user.isAdmin)}
>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive" defaultValue={String(user.isActive)}
>
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