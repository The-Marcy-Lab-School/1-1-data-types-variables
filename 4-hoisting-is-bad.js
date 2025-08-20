// Good — Uncaught ReferenceError: Cannot access 'name' before initialization
console.log(`Hi ${name}!`);
const name = 'Jane';


// Also Good — Uncaught ReferenceError: Cannot access 'age' before initialization
// console.log(`I'm ${age}.`);
// let age = 101;


// Bad! — Prints "Hi, undefined?" with no Error
// console.log(`Hi, ${weird}?`);
// var weird = 'Tom';


// Confusing! — Throws an error but only because `undefined` doesn't have a `toUpperCase` method
// console.log(str.toUpperCase());
// var str = 'Some string';


// Bad! - This works but it really shouldn't
// foo();
// function foo() {
//   console.log('foo!');
// }