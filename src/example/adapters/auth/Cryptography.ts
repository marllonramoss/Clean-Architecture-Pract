import PasswordProvider from '../../core/user/PasswordProvider'
import bcrypt from 'bcrypt'

export default class Cryptography implements PasswordProvider{
    cript(password: string): string {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }
    compare(password: string, passwordCripted: string): boolean {
        return bcrypt.compareSync(password, passwordCripted)
    }
}