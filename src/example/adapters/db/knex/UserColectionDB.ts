import User from "../../../core/user/User";
import UserColection from "../../../core/user/UserColection";
import conection from './conection'
export default class UserColectionDB implements UserColection {
    async insert(user: User): Promise<void> {
        await conection.table('users').insert(user)
    }

}