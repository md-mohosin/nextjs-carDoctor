import ThemeToogle from '@/app/ThemeToogle'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaSearch, FaShopify, FaShoppingBag } from 'react-icons/fa'

export default function Navbar() {

    const navLink = () => {
        return (
            <div className='flex gap-10 font-semibold'>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/services'>Services</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        )
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">


                            {navLink()}
                        </ul>
                    </div>
                    <Link href='/'>
                        <Image src={'/assets/logo.svg'} width={60} height={50}></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink()}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <Link href='/login'><button className="btn btn-outline btn-sm">Loign</button></Link>
                    <FaShoppingBag size={20}></FaShoppingBag>
                    <FaSearch size={20}></FaSearch>
                    <a className="btn btn-outline btn-sm border border-red-700">Appointment</a>
                    <ThemeToogle></ThemeToogle>
                </div>
            </div>
        </div>
    )
}
