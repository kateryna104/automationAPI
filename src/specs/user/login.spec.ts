import * as supertest from 'supertest'
import { getUser, user } from '../../data/user'
import { logIn, signUp, signUp2 } from '../../data/helpers'
const request = supertest('localhost:8001/api/v1')

describe('LOGIN', () => {
    describe('POSITIVE TESTING', () => {
        let userImport = getUser()
        it.skip('login user', async () => {
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
        // it.only('login user option 3 using try and catch',async()=>{
        //     try {
        //         // code that would catch and error -true
        //         await signUp(userImport).then((el) =>{
        //             expect(el.body.status).toBe("success");
        //             console.log(el.body, 'res');
        //         });
        //         await logIn({
        //             email: userImport.email,
        //             password: userImport.password,
        //         }).then((el2) => {
        //             expect(el2.body.status).toBe("success");
        //         })
        //     } catch (error) {
        //        // false
        //        console.log('Error during login process', error);
        //       // throw Error(error);

        //     }

        // })

        it('login user option 4 using then', () => {
            signUp(userImport)
                .then(res => {
                    expect(res.body.status).toBe("success");
                    return logIn({
                        email: userImport.email,
                        password: userImport.password
                    })
                })
                .then(res2 => {
                    expect(res2.statusCode).toBe(200);
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        it.only('login user option 5 using .end without Promise', (done) => {
            signUp2(userImport).end((err, res) => {
                if (err) return done(err)
                expect(res.body.status).toBe("success")
                done();

            })

            it.only('login user option 5 using .end without Promise', (done) => {
                
    
                })
    
            })
    })
    describe('NEGATIVE TESTING', () => {
        let userImport = getUser()
        it('get error when trying loging wihtout username', async () => {
        })
        it('get error when trying loging wihtout password', async () => {
            await signUp(userImport).then(el => {
                expect(el.body.status).toBe("success")
            })
            await logIn({
                email: userImport.email
            }).then(el2 => {
                expect(el2.body.message).toBe("Please provide email and password!")
            })
        })
        it('get error when trying loging with wrong password', async () => {
            await signUp(userImport).then(el => {
                expect(el.body.status).toBe("success")
            })
            await logIn({
                email: userImport.email,
                password: 'password'
            }).then(el2 => {
                expect(el2.body.message).toBe("Incorrect email or password")
            })
        })
        it('get error when trying loging with wrong username', () => {
        })

    })
})
