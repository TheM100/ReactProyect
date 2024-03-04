import React from "react";

function CardItem({ title, comments }) {
    return (
        <div className="cursor-pointer p-4 border">
            <div className="hover:text-blue-700">{title}</div>
            <p className="text-gray-500 text-sm">{comments}</p>
        </div>
    )
}


export { CardItem }