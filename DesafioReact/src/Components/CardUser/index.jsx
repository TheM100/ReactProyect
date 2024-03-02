import { useEffect, useState } from "react";

const CardUser = (props) =>{
    

    const {profilePicture,username,joined,bio} = props.userToCard
    

    return(
        <>
        <div className="w-5/6 mt-5 border rounded-lg relative mx-6 flex flex-col items-center">
                        <div className="w-full h-10p bg-slate-950 rounded-t-lg relative">---</div>
                        <div className="w-full flex  absolute top-3">
                            <div className="w-2/12 ml-4 h-12 border rounded-lg ">
                                <img className="object-f border rounded-lg" src={profilePicture} alt="" />
                            </div>
                            <span className="font-bold text-lg text-neutral-600 my-5 mx-2 ">
                                {username}
                            </span>
                        </div>

                            <button className="bg-blue-500 w-5/6 p-2 mt-16  border rounded-lg text-md text-white font-semibold">Follow</button>
                            <p className="mt-5 text-center">{bio}</p>
                   
                        <div className=" w-full flex flex-col mt-3   items-start">
                            <span className="mx-3"><b>JOINED</b></span>
                            <span className="mx-3">{joined}</span>
                        </div>
                    
                        
        </div>
        </>
    ) 
}

export default CardUser