import { FaApple } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { TbHexagonLetterF } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { login } from "../../api/usersApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {

    // const [isLogged, setIsLogged] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        console.log('Data:', data);
        await login(data);
        navigate("/");
    });

    return (
        <>
            <section className="w-full flex flex-col items-center ">
                <div className=" flex flex-col items-center   pt-6">
                    <div className="w-full  flex flex-col items-center ">
                        <a href="">
                            <img
                                className="w-auto h-12"
                                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
                                alt=""
                            />
                        </a>
                        <h1 className="text-3xl font-bold mt-4">Join the DEV Community</h1>
                        <p className="text-base mt-1 font-sans">
                            DEV Community is a community of 1,287,199 amazing developers
                        </p>
                    </div>

                    <div className="w-full grid grid-col gap-y-6 mt-6">
                        <button className="w-full p-3 rounded-xl bg-rgb-d4d4d4 border border-zinc-600 flex justify-between font-semibold">
                            <FaApple className="w-6 h-6" />
                            <span className="mr-36">Continue with Apple</span>
                        </button>
                        <button className="w-full p-3 rounded-xl bg-rgb-d4d4d4 border border-zinc-600 flex justify-between font-semibold">
                            <TbHexagonLetterF className="w-6 h-6" />
                            <span className="mr-36">Continue with Forem</span>
                        </button>
                        <button className="w-full p-3 rounded-xl bg-rgb-d4d4d4 border border-zinc-600 flex justify-between font-semibold">
                            <FaGithub className="w-6 h-6" />
                            <span className="mr-36">Continue with Github</span>
                        </button>
                        <button className="w-full p-3 rounded-xl bg-rgb-d4d4d4 border border-zinc-600 flex justify-between font-semibold">
                            <FaTwitter className="w-6 h-6" />
                            <span className="mr-36">Continue with Twitter</span>
                        </button>
                        <div className="flex items-center">
                            <hr className="flex-grow border-gray-300 border-t-1" />
                            <div className="mx-4 ">OR</div>
                            <hr className="flex-grow border-gray-300 border-t-1" />
                        </div>
                        <form className="w-full" onSubmit={onSubmit}>
                            <div className="flex flex-col">
                                <label className="font-bold" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                    type="email"
                                    id="email"
                                    name="email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <p className="text-red-500">Email is required.</p>
                                )}
                            </div>
                            <div className="flex flex-col mt-2">
                                <label className="font-bold" htmlFor="email">
                                    Password
                                </label>
                                <input
                                    className="border-2 border-gray-300 p-2 rounded-lg"
                                    type="password"
                                    id="password"
                                    name="email"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && (
                                    <p className="text-red-500">Password is required.</p>
                                )}
                            </div>
                            <div className="flex justify-between">
                                <div className="gap-x-1 mt-1">
                                    <input
                                        className="mx-1 border "
                                        type="checkbox"
                                        id="remember"
                                        name="remember"
                                    />
                                    <label className="text-base " htmlFor="remember">
                                        Remember me
                                    </label>
                                </div>
                                <a className="text-blue-900 font-normal" href="">
                                    Forgot Password?
                                </a>
                            </div>
                            <button className="bg-blue-900 w-full border rounded-lg p-2 text-white font-semibold mt-6">
                                Log in
                            </button>
                            <div className="w-full flex justify-center mt-2">
                                <p className=" w-2/3 text-center text-sm italic">
                                    By signing in, you are agreeing to our privacy policy, terms
                                    of use and code of conduct.
                                </p>
                            </div>

                            <hr className="h-px m-6 bg-gray-400" />
                            <div className="flex justify-center m-2">
                                New to DEV Community?{" "}
                                <a className="text-blue-900" href="">
                                    Create account.
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
