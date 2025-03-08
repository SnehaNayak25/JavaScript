/*
Operators - Used to perform some operation on data
*/

// Arithmetic Operators 
let a = 6;
let b = 2;
console.log("a = ", a , " and b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);  // Exponent

// Unary Operators
console.log("a++ = " , a++); // Post-Increment --> first print the value then do the operation
console.log("++a = " , ++a); // Pre-Increment --> first do the operation then print the value
console.log("a-- = " , a--); // Post-Decrement --> first print the value then do the operation
console.log("--a = " , --a); // Pre-Decrement --> first do the operation then print the value

// Assignment Operators
let c = 5;
let d = 2;
c+=4;
console.log("c += 4", c);
d*=2;
console.log("d *= 2", d);

//Comparison Operators

// == -> Checks for value
console.log("a == b ?" , a==b); // false
console.log("a != b ?" , a!=b); // true

let num1 = 5;
let num2 = "5";  // This string value 5 is converted to number then comparison is done
console.log("num1 == num2 ?" , num1==num2); // true

// === -> checks for value and datatype (Stricter Version)
console.log("num1 === num2 ?" , num1===num2); // false
console.log("num1 !== num2 ?" , num1!==num2); // true

let num3 = 5;
let num4 = 3;
console.log("num3 > num4 ?" , num3>num4); // true
console.log("num3 < num4 ?" , num3<num4); // false
console.log("num3 <= num4 ?" , num3<=num4); // false
console.log("num3 >= num4 ?" , num3>=num4); // true

// Logical Operators

let var1 = 6;
let var2 = 5;

let cond1 = var1 > var2;    // true
let cond2 = var2 < var1;    // true
console.log("cond1 && cond2 ? ", cond1&&cond2); // true
console.log("cond1 || cond2 ? ", cond1||cond2); // true
console.log(" (!cond2) ? ", !cond2);  false  



