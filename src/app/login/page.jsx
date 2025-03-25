import Image from 'next/image'
import React from 'react'
import LoginForm from './components/LoginForm'

export default function loginPage() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center mt-20'>

      {/* IMAGE */}
      <div className='w-11/12 lg:w-1/2 flex justify-center items-center'>
        <Image src={'/assets/images/login/login.svg'} alt='login' width={400} height={400}></Image>
      </div>

      {/* FORM */}
      <div className='w-11/12 lg:w-1/2'>
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}
