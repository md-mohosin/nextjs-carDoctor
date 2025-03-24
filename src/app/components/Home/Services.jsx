import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default async function Services() {
    // const res = await fetch("/services.json")
    const data = await dbConnect(collectionNameObj.servicesCollection).find({}).toArray()

    return (
        <div className='w-11/12 mx-auto mt-20'>
            <div className='text-center space-y-3 pb-8'>
                <h1 className='text-red-500 font-semibold'>Service</h1>
                <h1 className='text-3xl font-bold'>Our Service Area</h1>
                <p>pthe majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    data.map((item) => <div key={item._id}>
                        <div className="bg-base-100 w-full border rounded p-3 space-y-4">

                            <Image src={item.img} width={314} height={314} alt={item.title} className='h-[200px] w-full rounded'></Image>
                            <div className='flex justify-between items-center'>
                                <div className="space-y-3">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p className='text-red-500 font-bold'>Price : ${item.price}</p>
                                </div>
                                <Link href={`/services/${item._id}`}>
                                    <FaArrowRight color='red'></FaArrowRight>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
