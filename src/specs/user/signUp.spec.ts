import * as supertest from 'supertest'
import { getUser, user } from '../../data/user'
const request = supertest('localhost:8001/api/v1')
describe('USER SIGNUP', () => {
    describe('POSITIVE TESTING', () => {
        it.skip('Create a new user', async () => {
            const res = await request.post('/users/signup')
                .send({
                    "name": "Kate",
                    "email": "testkate11@gmail.com",
                    "password": "pass12345",
                    "passwordConfirm": "pass12345"
                }).expect(201)
            expect(res.body.data.user.name).toBe('Kate')
            expect(res.body.data.user.email).toBe('testkate11@gmail.com')
            //expect(res.body.data.status).toBe('success')
            console.log(res.body, 'res');
        })
        it('Create a new user', async () => {
            const res = await request.post('/users/signup')
                .send(user).expect(201)
            expect(res.body.data.user.name).toBe('Kate')
            expect(res.body.data.user.email).toBe('testkate12@gmail.com')
            //expect(res.body.data.status).toBe('success')
            console.log(res.body, 'res');
        })

        it('Create a new user using faker', async () => {
            const res = await request.post('/users/signup')
                .send(user).expect(201)
            expect(res.body.data.user.name).toBe(user.name)
            expect(res.body.data.user.email).toBe(user.email.toLowerCase())
            console.log(res.body, 'res');
        })
        it('Create a new user using faker', function (done) {
            let userImport = getUser()
            const res = request.post('/users/signup')
                .send(userImport)
                .expect(201)
                .end(function (err, res) {
                    if (err) return done(err);
                    console.log(res.body, 'res');
                    expect(res.body.data.user.name).toBe(userImport.name)
                    expect(res.body.data.user.email).toBe(userImport.email.toLowerCase())

                    return done()
                })
        })
    })
    describe('NEGATIVE TESTING', () => {
        it.only('should not create a new user with an existing email', async () => {
            const res = await request.post('/users/signup').send({
                "name": "Kate",
                "email": "testkate11@gmail.com",
                "password": "pass12345",
                "passwordConfirm": "pass12345"
            }).expect(500);
            expect(res.body.status).toBe('error');
            expect(res.body.message).toBe("E11000 duplicate key error collection: test.users index: email_1 dup key: { email: \"testkate11@gmail.com\" }")

        })
        
    })
    })

