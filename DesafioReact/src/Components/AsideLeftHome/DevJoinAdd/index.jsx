import React from "react";
import Button from "../../Button"
import { useNavigate } from "react-router-dom";


function DevJoinAdd() {
    const navigate = useNavigate();

    return (
        <section className="bg-white text-black rounded-md border-solid border border-gray-200 h-[fit-content]">
            <header className="px-4 pt-4 rounded-md">
                <h3 className="text-xl font-bold hover:text-blue-700 cursor-pointer ">DEV Community is a community of 1,301,393 amazing developers</h3>

            </header>
            <div className="flex flex-col px-3 gap-1 pb-4">
                <div className="cursor-pointer pt-2">
                    <div className="hover:text-blue-700">We're a place where coders share, stay up-to-date and grow their careers.</div>
                </div>
                <Button text="Create account" variant="secondary" />
                <Button text="Log in" variant="transparent" onClick={() => { navigate("/login") }} />
            </div>
        </section>
    )

}


export { DevJoinAdd }