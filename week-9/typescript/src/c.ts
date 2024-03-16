// interface of (defining types of different objects )

interface User {
    firstName: string;
    secondName: string;
    age: number;
    email?: string  // ? makes the thing optional
};

function isLegal1(user: User){
    if(user.age>18){
        return true
    }else{
        return false
    }
}

function greet1(user: User){
    console.log("welcome: "+ user.firstName + " " +  user.secondName)
}


isLegal1({
    firstName: "Shivam",
    secondName: "Kumar",
    age: 20
})