import OthersBanner from '@/components/OthersBanner'
import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import Image from 'next/image'
import React from 'react'

export default async function serviceDetailsPage({ params }) {
    const p = await params
    const servicesCollection = await dbConnect(collectionNameObj.servicesCollection).findOne({ _id: new ObjectId(p.id) })
    return (
        <div className='w-11/12 mx-auto'>
            <section>
                {/* EI BANNER IMAGE TA BACKGROUND IMAGE HISABE NA DIYE ONNO EKTA VABE NEXTJS ER <IMAGE/> EI TAG ER MADDOME DILE VALO HOBE ETA {80-4} NUMBER VIDIO TE BOLA ACE */}
                <OthersBanner img={'/assets/images/banner/4.jpg'} heading={'Service Details'}></OthersBanner>
            </section>
            <section className='flex gap-4 mt-20'>
                <div className='lg:w-2/2 p-2 space-y-4'>
                    <Image src={servicesCollection.img} width={300} height={400} alt='service' className='w-full rounded-md h-[400px]'></Image>
                    <h1 className='text-3xl font-bold'>{servicesCollection.title}</h1>
                    <p>{servicesCollection.description}</p>
                </div>
                <div className='lg:w-1/3 p-2'>
                    <div>
                        <button className="btn bg-[#FF3811] w-full">checkout</button>
                        <h1 className='font-bold pt-3'>Price: ${servicesCollection.price}</h1>
                    </div>
                </div>
            </section>
            {/* <p>{JSON.stringify(servicesCollection)}</p> */}
        </div>
    )
}
