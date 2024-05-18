import dotenv from 'dotenv'
dotenv.config

import { log } from 'console'
import express from 'express'
import UserRegisterController from './controllers/UserRegisterController'
import UserRegister from './core/user/UserRegister'
import UserColectionDB from './adapters/db/knex/UserColectionDB'
import Cryptography from './adapters/auth/Cryptography'

const app = express()
const porta = process.env.PORTA ?? 3001
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(porta, () => {
    log(`🔥 Server is running on port ${porta}`)
})

// ----------------------------------------- Open Routers

const cryptoProvider = new Cryptography()
const userCollection = new UserColectionDB
const userRegister = new UserRegister(userCollection, cryptoProvider)
new UserRegisterController(app, userRegister)

// ----------------------------------------- Auth Routers

