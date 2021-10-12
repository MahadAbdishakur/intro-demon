

const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("hello, whats is your name", function(answer){
    console.log("hi" + answer);
});

console.log("hello world");

const firstname = "Mahad";
const lastname = "Abdishakur";
const age = 19;

console.log(firstname, lastname, age); 

let x = 4;
let y = 100;
let z = 23;

let sum = z + y + x;
console.log(sum);

const greetings = "hello, my name is";
console.log(greetings + " "+ firstname +lastname);
