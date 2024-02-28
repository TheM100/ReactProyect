import { FaApple } from "react-icons/fa";

const Register = () =>{

return(
    <>
    <section className="w-full flex flex-col items-center border border-gray-700">
        <div className="w-5/12 flex flex-col items-center border border-gray-700 pt-6">

        <div className="w-full  flex flex-col items-center border border-red-500">
            <a href="">
            <img className="w-auto h-12" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png" alt="" />
            </a>
            <h1 className="text-3xl font-bold mt-4">Join the DEV Community</h1>
            <p className="text-base mt-1 font-sans">DEV Community is a community of 1,287,199 amazing developers</p>
        </div>
        <div className="w-full">
            <button className="w-full p-3 rounded-xl bg-rgb-d4d4d4 border border-zinc-700 flex justify-between"><FaApple className="w-6 h-6"/><span className="mr-56">Continue with Apple</span></button>
        </div>

        </div>
    </section>
    </>
)


}

export default Register