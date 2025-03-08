/*

1. var - Variable can be re-declared and updated. 
         A global scope variable.

2. let - Variable cannot be re-declared but can be updated. 
         A block scope variable.
         
3. const - Variable cannot be re-declared or updated. 
           A block scope variable.


Problem with var:

1. Using var variable can be re-declared which can lead to confusions.

*/

let fullName ; // is possible using let
console.log(fullName);  // Undefined

// const PI; --> Gives Error that it should be initialized with some value

