import React from "react";
import { RiSearchLine } from "react-icons/ri";


function SearchBar() {
    return (
        <div className="flex gap-5 items-center bg-white">

            <input type="text" placeholder="Search..." />
            <RiSearchLine />

        </div>
    )
}


export default SearchBar