interface User1 {
    name: string;
    age: number; 
}

function filterUsers(userList: User1[]){
    return userList.filter(x => x.age >= 18)
}

console.log(filterUsers([{
    name : "Shivam",
    age: 20
},{
    name: "banti",
    age: 9
}]))