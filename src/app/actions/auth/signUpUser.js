'use server'

import bcrypt from "bcrypt";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect"

export const signUpUser = async (payload) => {
    const usersCollection = dbConnect(collectionNameObj.usersCollection)


    // VALIDATION

    const { name, email, password } = payload
    if (!email || !password) {
        return { success: false }
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    payload.password = hashedPassword

    const findUser = await usersCollection.findOne({ email: payload.email })
    const usersResult = await usersCollection.insertOne(payload)
    const { _id, acknowledged, insertedId } = usersResult

    if (!findUser) {
        return { acknowledged, insertedId }
    }
    return { success: false }

}