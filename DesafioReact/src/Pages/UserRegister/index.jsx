import React from "react";
import Button from "../../Components/Button";
import LoginForm from "../../Components/LoginForm";
function Register() {
    return (
        <>
            <body className="flex flex-col items-center gap-4">

                <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
                <h2 className="font-bold text-3xl">Join the DEV Community</h2>
                <p>DEV Community is a community of 1,287,199 amazing developers</p>
                <div className="buttonWrapper flex flex-col gap-4">
                    <Button text="Continue with Apple" />
                    <Button text="Continue with Forem" />
                    <Button text="Continue with GitHub" />
                    <Button text="Continue with Twitter" />
                </div>

                {/* Needs correction */}
                <div className="w-72">
                    <hr />
                    <div className="w-auto">OR</div>
                </div>

                <LoginForm />
                <div className="items-center italic">
                    By signing in, you are agreeing to our <a href="/privacy" className='text-blue-700'>privacy policy</a>, <a href="/terms" className='text-blue-700'>terms of use</a> and <a href="/code-of-conduct" className='text-blue-700'>code of conduct</a>.
                </div>

                {/* Needs correction */}
                <div >
                    <hr />
                    <div class="crayons-subtitle-3 color-grey-700 fw-normal align-center pb-6">
                        New to DEV Community? <a href="/enter?state=new-user" className='text-blue-700'>Create account</a>.
                    </div>                </div>


            </body>
        </>
    )
}


export default Register