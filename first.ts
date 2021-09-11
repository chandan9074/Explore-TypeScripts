const hello = "chandan";
console.log("Hello buddy, I am from TypeScripts", hello);


// In type script the type of a variable is fixed. we can not assign a number in a string type variable.
let result:number = 3.94;
result = 4;

let stdName:string = "chandan";

stdName = "chandan kumar das";


// type script is also strict for function. here we can not pass a string as argu for number para. and we have to initialize the variable in the following way.

function add(fist: number , second:number):number{
    const result:number = fist + second;
    return result;
}

const answer: number = add(10, 20);


// array in type script 

const books : string[] = ["bangla", "english", "math", "physics"]; // sring[] , because books is a    arrau. so we extra add []

const price:number[] = [1000, 2000, 3000, 4000]; // same like as string

price.push(8000);
// price.push("8000") // this is not possible because, price is a number array;

books.push("cse");
// books.push(9000) // same like as price


// object type scirpt

type person = {name: string, id: string, age: number}; // externally declear the object types

const student: person = {
    name : "chandan",
    id : "182-15-11611",
    age : 23
}

// we can also declear the object types in the following way
const teacher: {name: string, id: string, age: number} = {  
    name : "chandan",
    id : "182-15-11611",
    age : 23
}

// arrow function in type script

const job = (location : string , post: string) : string => location + " " + post;
job("usa", "softwere engineer")
