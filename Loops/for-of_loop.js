/*
 for-of loop helps in iterating special datatypes like Strings, arrays

 for(let val of strVar)
 {
    // do some work
 }

*/

let str = "Hello Javascript";
let size = 0; // For finding length of string
for(let i of str)
{
    console.log(i);
    size++;
}
console.log("Length of the string is ", size);



