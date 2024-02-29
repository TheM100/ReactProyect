import React from "react";
import { RiSearchLine } from "react-icons/ri";


function SearchBar() {
    return (
        <div className="flex gap-5 items-center bg-white h-6 border border-gray-400 rounded-md px-2 py-4">

            <input type="text" placeholder="Search..." />
            <RiSearchLine />

        </div>
    )
}


export default SearchBar