import React, { useState,useEffect } from "react";
import Button from "../Button";
import SearchBar from "../SearchBar";
import { useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header2(props) {
    const navigate = useNavigate();
    const[textHeader,setTextHeader]=useState("")

    function getText(text){
        setTextHeader(text)
    }
   
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
                {!localStorage.getItem("token") &&
                    <>
                        <Button text="Log in" variant="transparent" className="text-gray-600" onClick={() => { navigate("/login") }} />
                        <Button text="Create account" variant="secondary" />
                    </>
                }
                {localStorage.getItem("token") &&
                    <>
                        <div className="flex items-center gap-3 pr-4">

                            <Button text="Create Post" variant="secondary" className="text-gray-600" onClick={() => { navigate("/newPost") }} />
                            <IoMdNotificationsOutline className="w-8 h-auto" />
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--80Xs8zXP--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1067852/9c972a7a-5c3e-4663-ad30-21fe9b9b0c62.jpeg" className="w-8 h-8 rounded-full object-cover" />
                        </div>

                    </>
                }
            </div>
        </header>
    );
}

export default Header2;
