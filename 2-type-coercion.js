// EVerything can easily be turned into a string
console.log(String(1))          // -> "1"
console.log(String(true))       // -> "true"

// Not everything becomes a number in a nice way
console.log(Number(false))      // -> 0
console.log(Number("hello"))    // -> NaN (not a number)

// Values that are "non-values" or "empty values" are considered "falsy"
// All other values are "truthy"
console.log(Boolean(0))         // -> false
console.log(Boolean(''))        // -> false
console.log(Boolean(null))      // -> false
console.log(Boolean(undefined)) // -> false
console.log(Boolean(100))       // -> true
console.log(Boolean('hello'))   // -> true

// JavaScript will not throw an error for this. It will just force one of the values to change type.
console.log("1" + 1);