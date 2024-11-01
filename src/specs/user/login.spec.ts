import * as supertest from 'supertest'
import { getUser, user } from '../../data/user'
import { logIn, signUp } from '../../data/helpers'
const request = supertest('localhost:8001/api/v1')

describe('LOGIN', () => {
    describe('POSITIVE TESTING', () => {
        let userImport = getUser()
        it('login user', async () => {
            //const res = await request.post('/users/signup').send(userImport).expect(201)
            // const res = await signUp(userImport)
            await signUp(userImport).then(el => {
                expect(el.body.status).toBe("success")
                console.log(el.body, 'res')
            })
            //console.log(res.body,'res');
            //const loginRes = await request.post('/users/login').send({
            // email: userImport.email,
            // password: userImport.password
            //   }).expect(200)
            // const logInRes = await logIn({
            //     email: userImport.email,
            //     password: userImport.password
            await logIn({
                email: userImport.email,
                password: userImport.password
            }).then(el2 => {
                expect(el2.body.status).toBe("success")
            })
        })
    })
    // describe('NEGATIVE TESTING', ()=>{
    //     let userImport = getUser

    //     it('get error when trying loging wihtout username',async() => {

    //     })
    //     it('get error when trying loging wihtout password',async() => {
    //         await logIn({
    //             email: userImport.email
    //         }).then 
    //     })
    //     it('get error when trying loging with wrong password', () => {
    //     })
    //     it('get error when trying loging with wrong username',() => {
    //     })

    // })
})
