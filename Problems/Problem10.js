/*
    1. For a given array of numbers, print the square of each value using the for-each loop.
*/

let arr = [1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val**2);
})


let arr1 = [2,4,6,8];
const square = (val) => {
    console.log(val*val);
}
arr1.forEach(square);