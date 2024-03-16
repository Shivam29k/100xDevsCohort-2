// implementing interfaces as class 


interface Person{
    name: string;
    age: number;
    greeting(phrase: string): void;
}


class Employee implements Person {
    name: string;
    age: number;
    
    constructor(n: string, a:number){
        this.name = n;
        this.age = a;
    }
    
    greeting(phrase: string){
        console.log(`${phrase} ${this.name}`);
    }
}
