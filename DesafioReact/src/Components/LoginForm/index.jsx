import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <>
            <form className='flex flex-col' onSubmit={handleSubmit((data) => console.log(data))}>

                <h3 className='font-bold'>Email</h3>
                <input {...register('email')} />
                {errors.lastName && <p>email is required.</p>}

                <h3 className='font-bold'>Password</h3>
                <input {...register('password', { required: true })} />
                {errors.age && <p>Please enter a valid password.</p>}

                <div className='flex justify-between gap-11 items-center'>
                    <div className='flex items-center'>

                        <input type="checkbox" name="" id="" />
                        <h3>Remember me</h3>
                    </div>
                    <a href="" className='text-blue-700'>Forgot password?</a>
                </div>
                <Button type="submit" value="Log in" onClick={() => { navigate("/") }} />

            </form>

        </>
    )
}

export default LoginForm