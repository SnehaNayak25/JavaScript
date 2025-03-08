/*
    arr.forEach(callBackFunction)

    Callbackfunction : Here it is a function to execute for each element in the array
                       A callback is a function passed as an argument to another function.
*/

let arr = [1,2,3,4,5,6];
arr.forEach(function printVal(val)
{
    console.log(val);
});

// Arrow functions
arr.forEach((value,idx) => {
    console.log(value,idx);
});

