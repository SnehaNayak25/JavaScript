/*
    push() - adds an element to end
    pop() - removes an element and returns it
    toString() - converts array to string
    concat() - joins multiple arrays and return result
    unshift() - add to start
    shift() - delete from start & return
    slice() - returns a piece of array --> slice(startIdx,endIdx)
    splice() - change original array  --> splice(startIdx,delCount,newEl1..)   // Here delcount means how many elements to delete, newEle means the elemnet to be added
*/

let foodItems = ['Pizza','Dosa','Idli','Burger']
console.log(`Original Array:  ${foodItems}`);

// push()
foodItems.push('Chips','Lays');
console.log(`After adding items:  ${foodItems}`);

//pop()
let deletedItem = foodItems.pop()
console.log(`Deleted element is:  ${deletedItem}`);
console.log(`After deletion:  ${foodItems}`);

// toString()
console.log(foodItems.toString());  

// concat()
let arr1 = [20,30,40,50,60];
let arr2 = [25,35,45,55,65];
let arr3 = [22,33];
let new_arr = arr1.concat(arr2,arr3);
console.log(new_arr);

// unshift()
console.log(arr1.unshift(10));

// shift()
let ele = arr1.shift()
console.log("Deleted element is",ele);

// slice()
let arr4 = [2,4,6,8];
console.log(arr4.slice(1,3)); //  [4, 6]
console.log(arr4.slice(3)); // [8] 

// splice()
let arr5 = [1,3,5,7,9];
arr5.splice(2,3,11,13);
console.log(arr5);  //  [1, 3, 11, 13]

