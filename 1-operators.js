// Arithmetic Operators
console.log("Arithmetic Operators:");
console.log(5 + 2);   // Addition
console.log(5 - 2);   // Subtraction
console.log(5 * 2);   // Multiplication
console.log(5 / 2);   // Division
console.log(5 % 2);   // Modulus (remainder)
console.log(5 ** 2);  // Exponentiation

// Comparison Operators
console.log("\nComparison Operators:");
console.log(5 > 2);     // x greater than y
console.log(5 < 2);     // x less than y
console.log(5 >= 5);    // x greater than or equal to y
console.log(5 <= 4);    // x less than or equal to y
console.log(5 == "5");  // x is loosely equal to y
console.log(5 === "5"); // x is strictly equal to y
console.log(5 != 2);    // x is loosely not equal to y
console.log(5 !== "5"); // x is strictly not equal to y

// Logical Operators
console.log("\nLogical Operators:");
console.log(true && false); // And
console.log(true || false); // Or
console.log(!true);         // Not

// Ternary Operator
console.log("\nTernary Operator:");
console.log(5 % 2 === 0 ? "it is even!" : "it is odd!");

// Order of Operations:
// 1. Math.random() --> resolves to a random number between 0 and 1
// 2. Math.random() > 0.5 --> resolves to true or false
// 3. Math.random() > 0.5 ? "Heads" : "Tails" --> resolves to "Heads" or "Tails"
// 4. const result = Math.random() > 0.5 ? "Heads" : "Tails" --> assigns the result to the variable result
const result = Math.random() > 0.5 ? "Heads" : "Tails";

console.log(result);