'use client'
import { signUpUser } from '@/app/actions/auth/signUpUser'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

export default function SignUpForm() {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        signUpUser({ name, email, password })
    }

    return (
        <div className=" w-full max-w-sm border border-gray-300 py-3 rounded">
            <h1 className='text-3xl font-bold text-center'>Sign UP</h1>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="fieldset-label">Name</label>
                    <input name='name'
                        type="text" className="input" placeholder="Your name" />
                    <label className="fieldset-label">Email</label>
                    <input name='email'
                        type="email" className="input" placeholder="Your email" />
                    <label className="fieldset-label">Your Password</label>
                    <input name='password'
                        type="password" className="input" placeholder="Your password" />
                    <button className="btn bg-[#FF3811] mt-4">Login</button>
                </form>
            </div>
            <div className='flex flex-col justify-center items-center pb-6 space-y-3'>
                <h1 className='font-semibold'>Or sing Up with</h1>
                <div>
                    {/* TO DO THIS GOOGLE LOGIN IN ANOTHER PAGE WITH ICON  */}
                    <FaGoogle></FaGoogle>
                </div>
            </div>
            <h1 className='text-center'>Already have an accout? <span className='text-[#ff3811] font-semibold'><Link href='/login'>Loign</Link></span></h1>
        </div>
    )
}
