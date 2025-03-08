/*
    Arrays:
        1. Collecion of items
        2. Linear or sequential 
        3. Mutable
*/

let marks = [97,82,75,64,36]
console.log(marks);    //  [97, 82, 75, 64, 36] 
console.log(typeof marks); // object

// Size of the array
console.log(marks.length);  // 5

// Accessing each element using index
console.log(marks[3]);  // 64

// Looping over an array
// Loops iterables(Strings, objects, arrays)

// Using for loop
for(let idx = 0;idx< marks.length;idx++)
{
    console.log(marks[idx]);
}

// Using for-of loop
for (let idx of marks) 
{
    console.log(idx); 
}