const prompt = require('prompt-sync')({ sigint: true });
let num1 = true
let num2 = 0
num2 = Number(prompt("Enter number: "))
while (num1 === true) {
    num2 = num2 * 2
    if (num2 <= 100){
        console.log(num2)
    }
    else if (num2>= 100) {
        num1 = false
        console.log(num2)
    }
}