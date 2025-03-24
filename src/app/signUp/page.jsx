import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

export default function signUpPage() {
  return (
     <div className='flex items-center justify-center mt-20'>
    
          {/* IMAGE */}
          <div className='lg:w-1/2 flex justify-center items-center'>
            <Image src={'/assets/images/login/login.svg'} width={400} height={400}></Image>
          </div>
    
          {/* FORM */}
          <div className='lg:w-1/2'>
            <div className=" w-full max-w-sm border border-gray-300 py-3 rounded">
              <h1 className='text-3xl font-bold text-center'>Sign UP</h1>
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label">Name</label>
                  <input type="text" className="input" placeholder="Your name" />
                  <label className="fieldset-label">Email</label>
                  <input type="email" className="input" placeholder="Your email" />
                  <label className="fieldset-label">Your Password</label>
                  <input type="password" className="input" placeholder="Your password" />
                  <button className="btn  bg-[#FF3811] mt-4">Login</button>
                </fieldset>
              </div>
              <div className='flex flex-col justify-center items-center pb-6 space-y-3'>
                <h1 className='font-semibold'>Or sing Up with</h1>
                <div>
                  {/* TO DO IN ANOTHER PAGE WIHT ICON  */}
                  <FaGoogle></FaGoogle>
                </div>
              </div>
              <h1 className='text-center'>Already have an accout? <span className='text-[#ff3811] font-semibold'><Link href='/login'>Loign</Link></span></h1>
            </div>
          </div>
        </div>
  )
}
