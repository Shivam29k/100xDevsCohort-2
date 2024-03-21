interface User {
    readonly id :string;
    name: string;
    age: number;
    readonly email: string;   // Readonly syntax will ensure that once any user object is formed with a email then it can't be ever changed
    password: string
};

const user1: User = {
    name:  "Shivam",
    age: 20,
    email: 'random email',
    password: 'password',
    id: '1'
}

// user.email = 'new mail' // this line of code will through an error because of readonly property
user1.age = 21;             // and this won't 


// same way we can make complete object as a readonly.
const user2: Readonly<User> = {
    name:  "Shivam",
    age: 20,
    email: 'random email',
    password: 'password',
    id: '1'
}


// pick is used to pick types of few parameters from a interface
type UpdateProps = Pick<User, 'name' | 'password' | 'age'>
// type UpdateProps = {
//     name: string;
//     password: string;
//     age: number;
// }

// Partial is used to make every parameter of a interface or typre into an optional parameter.
type updatePropsOptional = Partial<UpdateProps>
// type updatePropsOptional = {
//     name?: string | undefined;
//     password?: string | undefined;
//     age?: number | undefined;
// }

function updateUser(updatedProps: UpdateProps, optionalProps: updatePropsOptional){
    console.log(updatedProps.age, updatedProps.name, updatedProps.password )
}



// Record is used to take a key value pair as an input in a object
type Users = Record<number, User>;

const users = {
    1: user1,
    2: user2
} 
console.log(users[1])

// Map() -> This is a javascript fucntion, just another syntax to create a object with key value pair.
// const usersMap = new Map() -> This is a javascript function to create a map object.
const usersMap = new Map<number, User>();  // Maps with types in typescript
usersMap.set(1, user1);
usersMap.set(2, user2);

console.log(usersMap.get(1)) 


// Exclue is used to exclude few properties from a interface

type UserWithoutEmail = Exclude<User, 'email'>; // 'name' | 'age' | 'password' | 'id'