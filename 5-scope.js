// friend can be referenced anywhere within this file
const friend = 'John';

const greetFriend = (myName) => {
  // The parameter myName is considered a function-scoped variable

  // We can access the module-scoped variable `friend` here since we are in a lower scope.
  const message = `Hi, ${friend}, I'm ${myName}`;

  console.log(message);
}

greetFriend('Jane');
// Output: "Hi, John, I'm Jane"

// We get ReferenceErrors if we try to access variables out of scope.
console.log(message, myName);