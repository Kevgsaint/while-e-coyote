const prompt = require('prompt-sync')({ sigint: true });

let x = Number(prompt('Enter x: '))
let y = Number(prompt('Enter y:'))

while (x % y !== 0) {
    console.log(x)
    x++
}
console.log (x + 'is divisible by' + y)