"use strict";
const hello = "chandan";
console.log("Hello buddy, I am from TypeScripts", hello);
// In type script the type of a variable is fixed. we can not assign a number in a string type variable.
let result = 3.94;
result = 4;
let stdName = "chandan";
stdName = "chandan kumar das";
// type script is also strict for function. here we can not pass a string as argu for number para. and we have to initialize the variable in the following way.
function add(fist, second) {
    const result = fist + second;
    return result;
}
const answer = add(10, 20);
// array in type script 
const books = ["bangla", "english", "math", "physics"]; // sring[] , because books is a    arrau. so we extra add []
const price = [1000, 2000, 3000, 4000]; // same like as string
price.push(8000);
// price.push("8000") // this is not possible because, price is a number array;
books.push("cse");
const student = {
    name: "chandan",
    id: "182-15-11611",
    age: 23
};
// we can also declear the object types in the following way
const teacher = {
    name: "chandan",
    id: "182-15-11611",
    age: 23
};
// arrow function in type script
const job = (location, post) => location + " " + post;
job("usa", "softwere engineer");
// interface extends example
const shakib = {
    name: "shakib al hasan",
    age: 34,
    catagory: "cricketer",
    country: "bangladesh"
};
const chandan = {
    name: "chandan kumar das",
    company: "usa top company",
    post: "softwere engineer",
    salary: 200000,
    parents: ["sunil chandra", "gita rani"],
};
// class in ts
class car {
    constructor(model, price) {
        // const carDetails = model + price;
        this.model = model;
        this.price = price;
        this._serialNo = 1000;
    }
    getTotalInfo(tax) {
        const output = this.price - this.price * tax / 100;
        return output;
    }
}
const bmw = new car("BMW", 50000000); // create car object
