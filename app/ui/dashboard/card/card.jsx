import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className='bg-bgSoft p-5 rounded-[10px] flex gap-5 cursor-pointer w-full hover:bg-[#2e374a]'>
        <MdSupervisedUserCircle size={24}/>

        <div className="flex flex-col gap-5">
            <span className="t">Total User</span>
            <span className="text-2xl font-medium">10245</span>
            <span className="text-sm font-light"> <span className="text-green-600">12%</span> more  than previous week</span>
        </div>
    </div>
  )
}

export default Card