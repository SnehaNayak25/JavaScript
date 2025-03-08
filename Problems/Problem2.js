// Based on marks of student assigning the grade

let mark = prompt("Enter the marks:");
let grade;
if(mark >= 80 && mark <= 100)
{
    grade = "A";
}
else if(mark >= 70 && mark <= 79)
{
    grade = "B";
}
else if(mark >= 60 && mark <= 69)
{
    grade = "C";
}
else if(mark >= 50 && mark <= 59)
{
    grade = "D";
}
else if(mark >= 0 && mark <= 49)
{
    grade = "F";
}
console.log("Grade is.. ", grade);
