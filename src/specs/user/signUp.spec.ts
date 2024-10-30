import * as supertest from 'supertest'
import { user } from '../../data/user'
const request = supertest('localhost:8001/api/v1')
describe('USER SIGNUP',() => {
    it.skip('Create a new user',async () => {
        const res = await request.post('/users/signup')
        .send({
            "name": "Kate",
            "email": "testkate11@gmail.com",
            "password": "pass12345",
            "passwordConfirm":"pass12345"
        }).expect(201)
        expect(res.body.data.user.name).toBe('Kate')
        expect(res.body.data.user.email).toBe('testkate11@gmail.com')
        //expect(res.body.data.status).toBe('success')
        console.log(res.body,'res');
    })
    it('Create a new user',async () => {
        const res = await request.post('/users/signup')
        .send(user).expect(201)
        expect(res.body.data.user.name).toBe('Kate')
        expect(res.body.data.user.email).toBe('testkate12@gmail.com')
        //expect(res.body.data.status).toBe('success')
        console.log(res.body,'res');
    })
})