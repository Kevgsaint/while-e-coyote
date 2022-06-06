const prompt = require('prompt-sync')({sigint: true});
let num = Number(prompt("Enter value for 'num': "));
let count = 0;
let num1 = 0;
let num2 = 1;
let total = num1 + num2;
while (count > num){
    total = num1 + num2;
    num1 = num2;
    num2 = total;
    count++
}