import React from "react";
import Button from "../Button";
import SearchBar from "../SearchBar";

function Header() {

    return (

        <header className=" flex items-center gap-5 justify-between sticky top-0 z-10 bg-white">
            <div className="flex">

                <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
                <SearchBar />
            </div>

            <div className="flex gap-5">

                <Button text="Log in" variant="transparent" className='text-gray-600' />
                <Button text="Create account" variant='secondary' />
            </div>
        </header>
    )

}


export default Header