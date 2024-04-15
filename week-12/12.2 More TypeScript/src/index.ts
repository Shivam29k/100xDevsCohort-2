interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}


// Pick Api
type UpdateProps = Pick<User, 'name' | 'age' | 'password'>;
function updateUser(updateProps: UpdateProps){
    // hit the database to update the user
    // type UpdateProps = {
    //     name: string;
    //     age: number;
    //     password: string;
    // }
}


// Parital Api
type UpdatePropsOptional = Partial<UpdateProps>;
function updateUserOptional(updateProps: UpdatePropsOptional){
    // now we can update the user with only one property
    // type UpdatePropsOptional = {
    //     name?: string | undefined;
    //     age?: number | undefined;
    //     password?: string | undefined;
    // }
}

// Readonly Api
type UserReadOnly = Readonly<User>;
const user: UserReadOnly = {
    id: '1',
    name: 'John',
    age: 25,
    email: 'example@gmail.com',
    password: 'password'
}

// type UserReadOnly = {
//     readonly id: string;     // if we try to change the value of id, it will throw an error because it is readonly
//     readonly name: string;
//     readonly age: number;
//     readonly email: string;
//     readonly password: string;
// }


// Records

// type Users = {
//     [key: string] :User
// }
// or
type Users = Record<string, User>;

const users: Users = {
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
}

// Maps
const usersmap = new Map<string, User>();
usersmap.set('1', {
    id: '1',
    name: 'John',
    age: 25,
    email: 'email',
    password: 'password'
});

const user1 = usersmap.get('1'); // to get the user with key 1

// Both Records and Maps are used to store key value pairs, both are almost same, map is a javascript object and records are a typescript object

// Exclude Api
type UserWithoutPassword = Exclude<keyof User, 'password'>;
// type UserWithoutPassword = "id" | "name" | "age" | "email" 