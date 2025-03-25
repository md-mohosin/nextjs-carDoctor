'use client'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

export default function LoginForm() {
    const router = useRouter()
    const handleLoign = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        try {
            const result = await signIn("credentials", { email, password, redirect: false })
            if (result.ok) {
                router.push("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=" w-full max-w-sm border border-gray-300 py-3 rounded">
            <h1 className='text-3xl font-bold text-center'>Login</h1>
            <div className="card-body">
                <form onSubmit={handleLoign} className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input name='email'
                        type="email" className="input" placeholder="Your email" />
                    <label className="fieldset-label">Your Password</label>
                    <input name='password'
                        type="password" className="input" placeholder="Your password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn  bg-[#FF3811] mt-4">Login</button>
                </form>
            </div>
            <div className='flex flex-col justify-center items-center pb-6 space-y-3'>
                <h1 className='font-semibold'>Or login with</h1>
                <div>
                    {/* TO DO IN ANOTHER PAGE WIHT ICON  */}
                    <FaGoogle></FaGoogle>
                </div>
            </div>
            <h1 className='text-center'>Don not have any accout? <span className='text-[#ff3811] font-semibold'><Link href='/signUp'>Sign Up</Link></span></h1>
        </div>
    )
}
