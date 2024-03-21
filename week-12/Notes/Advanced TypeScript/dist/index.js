"use strict";
;
const user1 = {
    name: "Shivam",
    age: 20,
    email: 'random email',
    password: 'password',
    id: '1'
};
// user.email = 'new mail' // this line of code will through an error because of readonly property
user1.age = 21; // and this won't 
// same way we can make complete object as a readonly.
const user2 = {
    name: "Shivam",
    age: 20,
    email: 'random email',
    password: 'password',
    id: '1'
};
// type updatePropsOptional = {
//     name?: string | undefined;
//     password?: string | undefined;
//     age?: number | undefined;
// }
function updateUser(updatedProps, optionalProps) {
    console.log(updatedProps.age, updatedProps.name, updatedProps.password);
}
const users = {
    1: user1,
    2: user2
};
console.log(users[1]);
// Map() -> This is a javascript fucntion, just another syntax to create a object with key value pair.
// const usersMap = new Map() -> This is a javascript function to create a map object.
const usersMap = new Map(); // Maps with types in typescript
usersMap.set(1, user1);
usersMap.set(2, user2);
console.log(usersMap.get(1));
