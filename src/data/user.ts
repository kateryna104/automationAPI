import { faker } from '@faker-js/faker';

let password = faker.internet.password();

export const user = {
    "name": "Kate",
    "email": faker.internet.email(),
    "password": password,
    "passwordConfirm": password
}

export function getUser() {
  
    let password = faker.internet.password();
    return {
        "name": "Kate",
        "email": faker.internet.email(),
        "password": password,
        "passwordConfirm": password
    }

}
export function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(), // before version 9.1.0, use userName()
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}