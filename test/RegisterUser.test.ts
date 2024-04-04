import Cryptography from "../src/example/adapters/Cryptography"
import DbOnMemory from "../src/example/adapters/DbOnMemory"
import RegisterUser from "../src/example/core/user/RegisterUser"
import UserRegister from "../src/example/core/user/UserRegister"

test('Want to insert a user on DbOnMemory with crypted password', () => {
    const db = new DbOnMemory()
    const bcrypt = new Cryptography()
    const useCase = new UserRegister(db, bcrypt)

    const user = useCase.execute('Robert', 'robert@zmail.com', '123456')

    expect(user).toHaveProperty('id')
    expect(user.name).toBe('Robert')
    expect(user.email).toBe('robert@zmail.com')
    // expect(user.password).toBe('123456')
    console.log(user.password);
    expect(bcrypt.compare('123456', user.password)).toBeTruthy()
    
    
})

