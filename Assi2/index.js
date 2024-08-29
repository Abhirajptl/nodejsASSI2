
// const crypto = require('crypto');
// // console.log(process.argv)
// let operation = process.argv[2];
// let num1 = Number(process.argv[3]);
// let num2 = Number(process.argv[4]);
// function performCalculation(operation,num1,num2) {
//   switch (operation) {
//     case "add": 
//     console.log(`addition of ${num1} and ${num2} is ${num1+num2}`); 
//     break;
//     case "subtract": 
//     console.log(`subtraction of ${num1} and ${num2} is ${num1-num2}`); 
//     break;
//     case "multiply": 
//     console.log(`multiplication of ${num1} and ${num2} is ${num1*num2}`); 
//     break;
//     case "divide": 
//     console.log(`division of ${num1} and ${num2} is ${num1/num2}`); 
//     break;
//     case "sin":
//       console.log(`sin of ${num1} is ${Math.sin(num1)}`);
//       break;
//     case "cos":
//       console.log(`cos of ${num1} is ${Math.cos(num1)}`);
//       break;
//     case "tan":
//       console.log(`tan of ${num1} is ${Math.tan(num1)}`);
//       break;
//     default: 
//     console.log("Invalid operation");
//   }
// }

// //function to generate random number
// function genrateRandomNumber(length){
//   if(!length){
//     console.log("Provide length for random number generation.");
//     return;
//   }
//    // Calculate the number of bytes needed
//    const bytes = Math.ceil(length / 2);

//    // Generate random bytes
//    const randomBytes = crypto.randomBytes(bytes);
 
//    // Convert bytes to a hexadecimal string and ensure the desired length
//    const randomHex = randomBytes.toString('hex').slice(0, length);
//    // Convert the hexadecimal string to a decimal number
//   const randomDecimal = parseInt(randomHex, 16);

//   console.log(`Random Decimal: ${randomDecimal}`);
 
//    console.log(`Random Number (${length} digits): ${randomHex}`);
  
// }
// if(operation == "random"){
//   genrateRandomNumber(num1)
// }else{
//   performCalculation(operation,num1,num2)
// }


const crypto = require("crypto")
// console.log(process.argv);
let operation = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])

function performCalculation(operation,num1,num2){
    switch(operation){
        case "add":
            console.log(`addition of ${num1} and ${num2} is ${num1+num2}`);
            break;
        case "subtract":
            console.log(`subtraction of ${num1} and ${num2} is ${num1-num2}`);
            break;
        case "multiply":
            console.log(`multiplication of ${num1} and ${num2} is ${num1*num2}`);
            break;
        case "divide":
            console.log(`division of ${num1} and ${num2} is ${num1/num2}`);
            break;
        case "sin":
            console.log(`sin of ${num1} is ${Math.sin(num1)}`);
            break;
        case "cos":
            console.log(`cos of ${num1} is ${Math.cos(num1)}`);
            break;
        case "tan":
            console.log(`tan of ${num1} is ${Math.tan(num1)}`);
            break;
        default:
            console.log(`Invalid Operation`);
    } 
}

    // Function to generate random number
    function generateRandomNumber(length){
        if(!length){
            console.log(`Provide length for random number generation`)
        }

        // calculate the number of bytes needed
        const bytes = Math.ceil(length/2);

        // Generate random bytes
        const randomBytes = crypto.randomBytes(bytes);

        // convert bytes to hexadecimal string and ensure the desired length
        const randomHex = randomBytes.toString('hex').slice(0,length);

        // convert hexaDecimal string to decimal number
        const randomDecimal = parseInt(randomHex,16);

        console.log(`RandomDecimal : ${randomDecimal}`);

        console.log(`Random Number (${length} digit) : ${randomHex}`)
        
    }


if(operation == "random"){
    generateRandomNumber(num1)
} else{
    performCalculation(operation,num1,num2)
}







