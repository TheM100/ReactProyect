import React from "react";
import Button from "../Button";
import SearchBar from "../SearchBar";

function Header() {

    return (

        <header className="bg-green-500 flex items-center gap-5 justify-between">
            <div className="flex">

                <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
                <SearchBar />
            </div>

            <div className="flex gap-5">

                <Button text="Log in" />
                <Button text="Create account" />
            </div>
        </header>
    )

}


export default Header