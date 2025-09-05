// myName is module-scoped. Reachable anywhere in this file.
const myName = 'John';

const greetFriend = (friend) => {
  // Parameters like `friend` are function-scoped. Reachable anywhere in this function.

  if (!friend) {
    // message is block-scoped. Reachable only in this block.
    const message = "I can't say hi if I don't know your name!";
    console.log(message);
  } else {
    const message = `Hi, ${friend}, I'm ${myName}`;
    console.log(message);
  }
}

greetFriend("");
// Output: I can't say hi if I don't know your name!

greetFriend('Jane');
// Output: "Hi, Jane, I'm John"

// We get ReferenceErrors if we try to reference variables out of scope.
console.log(message, myName);