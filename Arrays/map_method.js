/*
    map() - Creates a new array with the results of some opeartion. 
    The value its callback returns are used to form new array.

    arr.map(callbackFunc(value,index,array))
*/

let ar1 = [11, 12, 13, 14, 15];

let newarr = ar1.map((val) => {
    return val ** 2;  // Return the squared value
});

console.log(newarr);  // Output: [121, 144, 169, 196, 225]

