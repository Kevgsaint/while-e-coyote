const prompt = require('prompt-sync')({ sigint: true });
console.log("Enter some numbers (type done when complete)");
let guest = prompt(">")
let num = 0;
 {
    while (guest !== "done") {
        num = num + Number(guest)
        guest = prompt(">")
    }
}
console.log("Sum is: " + num);



