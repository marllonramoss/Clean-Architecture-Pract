import User from "../core/user/User";
import UserColection from "../core/user/UserColection";

export default class DbOnMemory implements UserColection {
     static users: any[] = []
    
    async insert(user: User): Promise<void> {
        DbOnMemory.users.push(user)
    }

}