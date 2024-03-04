import React from "react";
import { useNavigate } from "react-router-dom";


function DarkModeAdd() {
    const navigate = useNavigate()
    return (
        <section className="bg-white text-black rounded-md border-solid border border-gray-200 h-[fit-content] p-3">
            <h4 className="pb-3 text-sm">DEV Community</h4>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png" alt="" className="rounded-lg" />
            <div className="flex flex-col px-3 gap-1 pb-4">
                <div className="cursor-pointer pt-2">
                    <div className=" font-bold text-2xl">Life is too short to browse without <span className="text-blue-700 underline">dark mode</span>.
                    </div>
                    <p>You can customize your theme, font, and more <span className="text-blue-700 underline" onClick={() => { navigate("./login") }}>when you are signed in.</span></p>
                </div>
            </div>
        </section>
    )

}


export { DarkModeAdd }