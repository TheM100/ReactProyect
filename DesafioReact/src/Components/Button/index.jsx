import classNames from "classnames";
import React from "react";


function Button({ text, variant, className }) {

    const buttonClassNames = classNames(
        "text-inherit border rounded-lg py-2 px-4",
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

        <button className={buttonClassNames}>{text}</button>
    )
}


export default Button