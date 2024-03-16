// Generics
// Type is not defined while defining the function but it is defined while passing values to the function

function identity<T>(arg: T){
    return arg;
}

let a = identity("myString"); // either we can directly pass the value ts will automatically detect it
let b = identity(5);
let c = identity<boolean>(false); // or we can explicitely tell the datatype 

console.log(a.toUpperCase());
