import { FaApple } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { TbHexagonLetterF } from "react-icons/tb";

const Register = () =>{

return(
    <>
    <section className="w-full flex flex-col items-center ">
        <div className="w-5/12 flex flex-col items-center   pt-6">

        <div className="w-full  flex flex-col items-center ">
            <a href="">
            <img className="w-auto h-12" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png" alt="" />
            </a>
            <h1 className="text-3xl font-bold mt-4">Join the DEV Community</h1>
            <p className="text-base mt-1 font-sans">DEV Community is a community of 1,287,199 amazing developers</p>
        </div>
        
        <div className="w-full grid grid-col gap-y-8 mt-6">
            <button className="w-full p-3 rounded-xl bg-rgb-d4d4d4 border border-zinc-700 flex justify-between font-semibold"><FaApple className="w-6 h-6"/><span className="mr-56">Continue with Apple</span></button>
            <button className="w-full p-3 rounded-xl bg-rgb-d4d4d4 border border-zinc-700 flex justify-between font-semibold"><TbHexagonLetterF className="w-6 h-6"/><span className="mr-56">Continue with Forem</span></button>
            <button className="w-full p-3 rounded-xl bg-rgb-d4d4d4 border border-zinc-700 flex justify-between font-semibold"><FaGithub className="w-6 h-6"/><span className="mr-56">Continue with Github</span></button>
            <button className="w-full p-3 rounded-xl bg-rgb-d4d4d4 border border-zinc-700 flex justify-between font-semibold"><FaTwitter className="w-6 h-6"/><span className="mr-56">Continue with Twitter</span></button>
            <div class="flex items-center">
                <hr className="flex-grow border-gray-400 border-t-1"/>
                <div className="mx-4 text-gray-500">OR</div>
                <hr className="flex-grow border-gray-400 border-t-1"/>
            </div>
        </div>

        </div>
    </section>
    </>
)


}

export default Register