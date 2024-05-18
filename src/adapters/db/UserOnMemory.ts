import User from "../../core/user/User";
import UserColection from "../../core/user/UserColection";

export default class UserOnMemory implements UserColection {
    private users: User[] = []
    
    async insert(user: User): Promise<void> {
        this.users.push(user)
    }
    
    async searchByEmail(email: string): Promise<User | null> {
        const user = this.users.find(
            (user) => user.email === email
        )
        return user || null
    }

}