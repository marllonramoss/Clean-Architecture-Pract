import Cryptography from "../src/example/adapters/auth/Cryptography"
import DbOnMemory from "../src/example/adapters/db/UserOnMemory"
import RegisterUser from "../src/example/core/user/RegisterUser"
import UserRegister from "../src/example/core/user/UserRegister"

test('Want to insert a user on DbOnMemory with encrypted password', async () => {
    const db = new DbOnMemory()
    const bcrypt = new Cryptography()
    const useCase = new UserRegister(db, bcrypt)

    const user = await useCase.execute('Robert', 'robert@zmail.com', '123456')

    expect(user).toHaveProperty('id')
    expect(user.name).toBe('Robert')
    expect(user.email).toBe('robert@zmail.com')
    
    console.log(`user id: ${user.id}`);
    console.log(`user password: ${user.password}`);
    expect(bcrypt.compare('123456', user.password!)).toBeTruthy()
    
    
})
test('It should throw an error when attempting to register a user that is already ', async () => {
    const db = new DbOnMemory()
    const bcrypt = new Cryptography()
    const useCase = new UserRegister(db, bcrypt)

    const name = 'Joao da Silva'
    const email = 'jjoao@zmail.com'
    const password = '123456'

    await useCase.execute(name, email, password)
    const exec = async () => await useCase.execute(name, email, password)

    await expect(exec).rejects.toThrowError('User already exists')
    
})

