/*
    filter() - Creates new array of elements that give true for a condition or filter
    Ex: All even elements 
*/

let nums = [1,2,3,4,5,6];
let evenArr = nums.filter((val) => {
    return val>3;
});
console.log(evenArr);