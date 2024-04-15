"use strict";
function updateUser(updateProps) {
    // hit the database to update the user
    // type UpdateProps = {
    //     name: string;
    //     age: number;
    //     password: string;
    // }
}
function updateUserOptional(updateProps) {
    // now we can update the user with only one property
    // type UpdatePropsOptional = {
    //     name?: string | undefined;
    //     age?: number | undefined;
    //     password?: string | undefined;
    // }
}
const user = {
    id: '1',
    name: 'John',
    age: 25,
    email: 'example@gmail.com',
    password: 'password'
};
const users = {
    '1': {
        id: '1',
        name: 'John',
        age: 25,
        email: 'example@gmail.com',
        password: 'password'
    },
    '2': {
        id: '2',
        name: 'Doe',
        age: 30,
        email: 'example2@gmail.com',
        password: 'password'
    },
    '3': {
        id: '3',
        name: 'Jane',
        age: 35,
        email: 'example3@gamil.com',
        password: 'password'
    }
};
// Maps
const usersmap = new Map();
usersmap.set('1', {
    id: '1',
    name: 'John',
    age: 25,
    email: 'email',
    password: 'password'
});
const user1 = usersmap.get('1'); // to get the user with key 1
// Both Records and Maps are used to store key value pairs, both are almost same
