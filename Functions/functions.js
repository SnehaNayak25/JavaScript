/*
    Functions - Block of code that performs a specific task, can be invoked whenever needed.

    Function Definition-
        function functionName()
        {
            // Do some work
        }

        function functionName(para1,para2..)
        {
            // Do some work
        }
    
    Function call-
        functionName();

    High-order functions - which takes functions as arguments or which returns functions as output.
*/

// Without any arguments
function myFunction()
{
    console.log("Learning JavaScript...");
    console.log("Functions inJavaScript");
}
myFunction();

// With arguments
function printMsg(msg)
{
    console.log(msg);
}
printMsg("Good Morning...")

// Function to print sum of two numbers
function sum(a,b)
{
    console.log(`Sum of ${a} and ${b} is ${a+b}`);
}
sum(10,20);

// With returning value 
function sub(a,b)   // Here a and b acts like local variables which can be used only within the block..
{
    let diff = a - b ;
    return diff;
}
let res = sub(20,10);
console.log("The difference between two numbers is",res);