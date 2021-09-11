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
