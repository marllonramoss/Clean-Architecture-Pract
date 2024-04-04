export default interface PasswordProvider {
    cript(password: string): string
    compare(password: string, passwordCripted: string): boolean
}