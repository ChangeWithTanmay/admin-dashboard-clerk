import React from 'react'

const Pagination = () => {
  return (
    <div className='p-2.5 flex justify-between'>
        <button className="py-[8px] px-[8px] cursor-pointer bg-text text-bg disabled:cursor-not-allowed disabled:bg-textSoft rounded-[5px]" disabled>Previous</button>
        <button className="py-[8px] px-[8px] cursor-pointer bg-text text-bg disabled:cursor-not-allowed disabled:bg-textSoft rounded-[5px]">Next</button>
    </div>
  )
}

export default Pagination