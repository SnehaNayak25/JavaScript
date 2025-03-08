/*
    For a given array with marks of students -> [85,97,44,37,76,60]
    Find the average marks of the entire class.
*/

let student_marks = [85,97,44,37,76,60];
let sum = 0;
for (let val of student_marks) 
{
    sum = sum + val;   
}
console.log("Sum of array elemnts is",sum);
let avg = sum / student_marks.length;
console.log(`The average of marks is ${avg}`);