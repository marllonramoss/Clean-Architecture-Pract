import UserRegister from "../core/user/UserRegister";
import {Express} from "express"

export default class UserRegisterController {

    constructor(
        private servidor: Express,
        private userRegister: UserRegister
    ){
        servidor.post('/register', async (req, res) => {
            await userRegister.execute(
                req.body.name,
                req.body.email,
                req.body.password
            )
            res.status(201).send()
        } )
    }

}