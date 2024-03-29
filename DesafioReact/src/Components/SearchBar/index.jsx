import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";


function SearchBar(props) {
   
    const[TextInput, SetTextInput]= useState("")

    const textHandler = (event) =>{
        const value = event.target.value
        SetTextInput(value)
      }
      useEffect(() => {
        props.extractText(TextInput);
      }, [TextInput, props.extractText]);


    return (
        <div className="flex gap-5 items-center bg-white h-6 border border-gray-300 rounded-md px-2 py-4 hover hover:border-blue-700">

            <input onChange={textHandler} type="text" placeholder="Search..." className="bg-transparent outline-none w-72" />
            <RiSearchLine className="hover hover:text-blue-700 cursor-pointer hover:bg-gray-300/30 w-8 h-8 p-1 rounded-md" />

        </div>
    )
}


export default SearchBar