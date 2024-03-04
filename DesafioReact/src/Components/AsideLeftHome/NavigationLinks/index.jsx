import React from "react";
import { Link } from "react-router-dom";


function NavigationLinks({ src, text }) {
    return (
        <li className="flex flex-row gap-2 p-2 hover:underline hover:bg-blue-100/60 rounded-md hover:text-blue-700">
            {/* icono home png */}
            <img
                src={src}
                className="w-6 h-6"
            />
            <Link to="/">{text}</Link>
        </li>)
}


export { NavigationLinks }