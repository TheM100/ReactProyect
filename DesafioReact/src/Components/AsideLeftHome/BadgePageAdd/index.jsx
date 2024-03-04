import React from "react";
import Button from "../../Button";

function BadgePageAdd() {
    return (
        <section className="bg-white text-black rounded-md border-solid border border-gray-200 h-[fit-content]">
            <header className="px-4 pt-4 rounded-md">
                <h4 className="pb-3 text-sm">DEV Community</h4>

                <h3 className=" font-bold hover:text-blue-700 cursor-pointer text-2xl">Check Out Our Badge Page and Start Earning!
                </h3>

            </header>
            <div className="flex flex-col px-3 gap-1 pb-4">
                <div className="cursor-pointer pt-2">
                    <div className="hover:text-blue-700 p-1">Take a tour of our badge page and embark on a quest to earn recognition for your amazing contributions. Your journey to becoming a DEV legend starts here.

                    </div>
                </div>
                <Button text="Need we say more?" variant="secondary" />
            </div>
        </section>
    )
}


export { BadgePageAdd }