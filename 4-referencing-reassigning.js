// Use let because we will reassign this variable
let count = 0;

// Reference the count variable to access its current value, 0
console.log(`count starts at ${count}`);

// Reassign the variable to hold a new value: 1
count = 1;

// Reference the count variable again to access its current value, 1
console.log(`count is now ${count}`);


// The right side of `=` resolves before reassignment. Count is 2
// count = count + 1;

// The "increment" operator is the same as `count = count + 1`. Count is 3
// count++;

// The "addition assignment" operator is the same as `count = count + 3`. Count is 6
// count += 3;

// console.log(`count is now ${count}`); // Output: count is now 6