import classNames from "classnames";
import React from "react";


function Button({ text, variant, className }) {

    const buttonClassNames = classNames(
        "text-white border rounded-lg py-2 px-4",
        {
            "bg-white": variant === "default",
            "bg-indigo-700": variant === "primary",
            "bg-transparent text-inherit border-transparent": variant === "transparent"
        },
        className
    )

    return (

        <button className={buttonClassNames}>{text}</button>
    )
}


export default Button