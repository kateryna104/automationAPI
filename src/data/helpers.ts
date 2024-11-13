import * as supertest from 'supertest';
const request = supertest('localhost:8001/api/v1');

 export function signUp2(user: object | string | undefined) {
    return request.post('/users/signup').send(user)
 }

export function signUp(user: object): Promise<any> {
    return new Promise((resolve, reject) => {
        request
            .post('/users/signup')
            .send(user)
            .end((err, res) => {
                if (err) return reject(err);
                else resolve(res);
            });
    })
}

export async function logIn(user: object) {
    return await request.post('/users/login').send(user)
}