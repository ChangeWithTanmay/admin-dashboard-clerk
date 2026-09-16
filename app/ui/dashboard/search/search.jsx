"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce';
import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q")
    }
    replace(`${pathname}?${params}`);
  }, 400);

  return (
    <div className="flex items-center gap-2.5 bg-[#2e374a] p-1.5 rounded-[10px] w-max">
      <MdSearch size={20} />
      <input type="text" placeholder={placeholder} className='' onChange={handleSearch} />
    </div>
  )
}

export default Search