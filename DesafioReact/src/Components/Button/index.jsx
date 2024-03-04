import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";


function Button({ text, variant, className, onClick }) {

    const buttonClassNames = classNames(
        "border rounded-lg py-2 px-4",
        {
            "bg-white text-gray-500": variant === "default",
            "bg-indigo-700 text-white": variant === "primary",
            "bg-transparent text-inherit border-transparent": variant === "transparent",
            "bg-transparent text-gray-600 border-gray-300": variant === "light",
            "bg-transparent text-indigo-600 border-indigo-600 font-bold": variant === "secondary"
        },
        className
    )

    return (

        // <Link className={buttonClassNames} to={to}>{text}</Link>
        <button className={buttonClassNames} onClick={onClick}>{text} </button>
    )
}


export default Button