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

// interface (most important part in ts) in ts

interface player {
    name: string, 
    age: number,
    catagory: string, 
    country: string,
    hobby?: string   // make hobby optional by using ?
}

// interface extends example

const shakib: player = {
    name : "shakib al hasan",
    age: 34, 
    catagory: "cricketer",
    country: "bangladesh"
}

interface family {
    parents: string[],
    wife?: string,   // make optional
    children?: number  // make optional
}

interface developer extends family {   // extends family in developer interface. means now developer also have the property of family.
    name: string,
    company : string,
    post : string,
    salary : number
}

const chandan: developer = {
    name: "chandan kumar das",
    company: "usa top company",
    post: "softwere engineer",
    salary: 200000,
    parents: ["sunil chandra", "gita rani"],
}


// class in ts

class car {
    model: string;
    price: number;
    private _serialNo: number;
    constructor(model: string, price:number){
        // const carDetails = model + price;
        this.model = model;
        this.price = price;
        this._serialNo = 1000;
    }

    getTotalInfo(tax:number): number{
        const output = this.price - this.price * tax/100;
        return output;
    }
}

const bmw= new car("BMW", 50000000);   // create car object
