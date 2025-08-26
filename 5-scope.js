// Global Scope: this value can be referenced in any file. DON'T DO THIS
global.x = 10; 

// Module Scope: this value can only be referenced within this file
const friend = 'John'; 

// Function Scope: The myName parameter and message variable can only be referenced within greetFriend
const greetFriend = (myName) => {
  // We can access the module scoped `friend` here since we are in a lower scope.
  const message = `Hi, ${friend}, I'm ${myName}`;
  
  console.log(message);
}

greetFriend('Jane'); 
// Output: "Hi, John, I'm Jane"

console.log(message); // ReferenceError: message is not defined in this scope
