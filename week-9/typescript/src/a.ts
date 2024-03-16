// adding typecheck on a variable 
let x: number = 2;
console.log(x);

// adding typecheck in a function arguments
function greet(firstName: string){
    console.log("Welcome " + firstName)
}
greet("shivam");

// simple sum function
function sum(a: number, b:number): number{
    return a+b
}

// Both sum and sum2 are same because typescript can know itself what will be the type of a return in most of the cases
// but still best practice is to mention it explicitely
function sum2(a: number, b:number){
    return a+b
}
sum(6, 9);
console.log(sum(5,5));

// another example
function isLegal(age: number){
    if(age>18){
        return true
    }else{
        return false
    }
}
let y = isLegal(19)
console.log(y);