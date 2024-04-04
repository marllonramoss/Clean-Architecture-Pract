import User from "./User";
import UserColection from "../user/UserColection"
import PasswordProvider from "./PasswordProvider";

export default class UserRegister {
     constructor( private colection: UserColection, private passwordProvider: PasswordProvider){}

    execute(name: string, email: string, password: string){
        const newPassword = this.passwordProvider.cript(password)

        const user: User = {
            id: Math.random(),
            name,
            email,
            password: newPassword
        }
        
        this.colection.insert(user)
        return user

    }
}