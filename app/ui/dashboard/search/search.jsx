import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({placeholder}) => {
  return (
    <div className="flex items-center gap-2.5 bg-[#2e374a] p-1.5 rounded-[10px] w-max">
        <MdSearch size={20}/>
        <input type="text" placeholder={placeholder} className=''/>
    </div>
  )
}

export default Search