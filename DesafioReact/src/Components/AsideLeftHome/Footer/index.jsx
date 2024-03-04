import React from "react";

function Footer() {
    return (
        <footer class="text-sm pt-8 text-gray-400">
            <p>
                <span className="text-blue-700 p-1 font-bold" >DEV Community</span>
                A constructive and inclusive social network for software developers. With you every step of your journey.
            </p>

            <p class="mt-4">Built on <span className="text-blue-700 p-1" >Forem</span> — the <span className="text-blue-700 p-1 " >open source</span> software that powers <span className="text-blue-700 p-1" >DEV</span> and other inclusive communities.</p>
            <p class="mt-4">Made with love and <span className="text-blue-700 p-1" >Ruby on Rails</span>. DEV Community <span title="copyright">©</span> 2016 - 2024.</p>
        </footer>
    )
}

export { Footer }