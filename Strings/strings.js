/*
    String is a sequence of characters used to represent text.
    Strings are immutable

*/

// Creating String
let str1 = "String Concept";
console.log(str1);

// String length
let len = str1.length;
console.log("Length of ",str1," is ", len);

// Accessing index
console.log(str1[0]); // S
console.log(str1[8]); // o

// Template Literals -- Special type of string
let sentence = `This is a template literal`;
console.log(typeof sentence);  // string

let obj = {
    item : "pen",
    price : 10
};
let res = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(res);
// or
console.log("The cost of",obj.item,"is",obj.price);

// String Methods

// Converts string to uppercase
let str3 = "abc";
let upper = str3.toUpperCase()
console.log(upper);     // ABC

// Converts string to lowercase
let str4 = "ABC";
let lower = str4.toLowerCase()
console.log(lower);     // abc

// Removes whitespaces - starting and ending
let str5 = " Hello World ";
console.log(str5.trim());   // Hello World

// Returns part of String
let str6 = "String Concept";
console.log(str6.slice(2,9));  // ring Co

// Joins two strings
let str7 = "Java";
let str8 = "Script";
console.log(str7.concat(str8)); // JavaScript
    // or
console.log(str7 + str8);   // JavaScript

//  Replacing with new value
let s1 = "Hello JavaScript";
console.log(s1.replace("Script"," "));  // Hello Java 

let s2 = "Hellooo";
console.log(s2.replaceAll('o','i'));    // Helliii

// Accesing characters
console.log(s1.charAt(3));  // l