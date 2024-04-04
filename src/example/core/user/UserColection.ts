import User from "./User";

export default interface UserColection {
    insert(user:User): Promise<void>
}