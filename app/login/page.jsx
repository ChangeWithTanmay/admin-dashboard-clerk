import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form action="" className='bg-bgSoft p-8 rounded-[10px] w-100 h-100 flex flex-col justify-center gap-7.5 items-center'>
        <h1 className='font-bold text-2xl text-center'>Login Page</h1>
        <input 
        className='p-4 border-2 border-[#2e374a] rounded-[5px] bg-bg text-text w-full' 
        type="text" 
        placeholder='username' />
        <input 
        className='p-4 border-2 border-[#2e374a] rounded-[5px] bg-bg text-text w-full' 
        type="text" 
        placeholder='password' />

        <button className='p-4 bg-[teal] text-text border-none cursor-pointer rounded-[5px] w-full'>Login</button>
      </form>
    </div>
  )
}

export default page
