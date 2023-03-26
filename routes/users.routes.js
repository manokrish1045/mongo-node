import express from "express"
import { createUsers, getUsersbyName } from "../service/users.service.js";
const router = express.Router()
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
async function generateHashpassword(password) {
    const No_of_round = 10
    const salt = await bcrypt.genSalt(No_of_round)
    const hashpassword = await bcrypt.hash(password, salt)
    console.log(salt)
    console.log(hashpassword)
    return hashpassword

}

router.post("/signup", async function (request, response) {
    const { username, password } = request.body
    const userFromdb = await getUsersbyName(username)
    if (userFromdb) {
        response.status(400).send({ message: "username exist" })
    } else if (password.length < 8) {
        response.status(400).send({ message: "password must be greater than 8" })

    }

    else {
        const hashpassword = await generateHashpassword(password)
        const result = await createUsers({ username, password: hashpassword })
        response.send(result)
    }

});

router.post("/login", async function (request, response) {
    const { username, password } = request.body
    const userFromdb = await getUsersbyName(username)
    if (!userFromdb) {
        response.status(400).send({ message: " no acc found" })
    } else {
        const stortedDbpassword = userFromdb.password
        const ispassword = await bcrypt.compare(password, stortedDbpassword)
        console.log(ispassword)

        if (ispassword) {
            const token = jwt.sign({ id: userFromdb._id }, process.env.SECRET_KEY)
            response.send({ message: " sucessful login", token: token })
        } else {
            response.status(400).send({ message: " no acc found" })

        }

    }

});

export default router


