import User from "../../core/user/User";
import UserColection from "../../core/user/UserColection";

export default class UserOnMemory implements UserColection {
     static users: User[] = []
    
    async insert(user: User): Promise<void> {
        UserOnMemory.users.push(user)
    }

}