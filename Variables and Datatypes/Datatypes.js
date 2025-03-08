/*
1. Primitive Data Types
2. Non Primitive Data Types  
*/

// Primitive Datatypes 
// Number Datatype
let num1 = 10;
console.log(num1); // 10
console.log(typeof(num1));  // number
let num2 = 10.2;
console.log(num2);  // 10.2
console.log(typeof(num2)); // number

// String Datatype
let firstName = "ABC";
console.log(firstName); // ABC
console.log(typeof(firstName));  // string

// Boolean Datatype
let bool = true;
console.log(bool);  // true
console.log(typeof(bool)); // boolean

// Undefined Datatype - By default all the variables are undefined
let x;
console.log(x);   // undefined
console.log(typeof(x)); // undefined

// Null Datatype 
let y = null;
console.log(y);     // null
console.log(typeof(y)); // object

// BigInt Datatype
let a = BigInt("123");
console.log(a);     // 123n
console.log(typeof(a));    // bigint 

// Symbol Datatype
let b = Symbol("Hello!");
console.log(b);     // Symbol(Hello!)
console.log(typeof(b)); // symbol


// Non Primitive Datatypes
// Objects - Collection of values, consists of key value pairs

const student = {
    fName : "ABC",
    age : 12,
    cgpa : 8.2,
    isPass : true
};
console.log(student); // {fName: 'ABC', age: 12, cgpa: 8.2, isPass: true}
console.log(typeof(student)); // object
console.log(student.age);   // 12
console.log(student["cgpa"]);   // 8.2

// Updating the values of object --> constant objects key can be changed
student["age"] = student["age"] + 1 ;
console.log(student.age);  // 13

student.fName = "XYZ";
console.log(student.fName); // XYZ

