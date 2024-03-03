import React, { useState,useEffect } from "react";
import Button from "../Button";
import SearchBar from "../SearchBar";
import { useNavigate } from "react-router-dom";

function Header(props) {
    const navigate = useNavigate();
    const[textHeader,setTextHeader]=useState("")

    function getText(text){
        setTextHeader(text)
    }
    useEffect(() => {
        props.extractText(textHeader);
      }, [textHeader, props.extractText]);

    return (
        <header className=" flex items-center gap-5 justify-between p-1 border-b border-gray-300">
            <div className="flex place-items-center gap-5 pl-14 py-1">
                <img
                    src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                    alt=""
                    className="w-13 h-10 cursor-pointer"
                    onClick={() => { navigate("/"); }}
                />
                <SearchBar extractText={getText}/>
            </div>

            <div className="flex gap-5">
                <Button text="Log in" variant="transparent" className="text-gray-600" onClick={() => { navigate("/login") }} />
                <Button text="Create account" variant="secondary" />
            </div>
        </header>
    );
}

export default Header;
