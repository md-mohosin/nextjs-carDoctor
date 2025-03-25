'use server'

import bcrypt from 'bcrypt'

import dbConnect, { collectionNameObj } from "@/lib/dbConnect"

export const loginUser = async (payload) => {

    const { email, password } = payload;

    const usersCollection = dbConnect(collectionNameObj.usersCollection)
    const user = await usersCollection.findOne({ email })
    console.log('login action',user)

    if (!user) {
        return null
    }
    const isPasswordOk = await bcrypt.compare(password,user.password)
    console.log('loign action',isPasswordOk, 'usersPassword',password,'password',password)

    if (!isPasswordOk) return null
    user._id = user._id.toString()
    return user
}

