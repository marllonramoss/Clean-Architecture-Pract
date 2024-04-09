import Cryptography from "../../adapters/auth/Cryptography"
import UserColection from "./UserColection"
import uuid from '../shared/Id'

export default class RegisterUser {
    
    constructor(private colection: UserColection, private passwordProvider: Cryptography){}

    execute(name: string, email: string, password: string){
        const CriptoPassword = this.passwordProvider.cript(password)

        const user = {
            id: uuid.gerar(),
            name,
            email,
            password: CriptoPassword
        }

        this.colection.insert(user)

        return user
    }
}