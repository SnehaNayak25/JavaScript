/*
    for-in loop is used for iterating objects and arrays

    for(let key in objVar)
    {
        // do some work
    }
*/

let student = {
    s_name:"Sonall",
    age:20,
    cgpa:8.0,
    isPass:true
};

for (let i in student)
{
    console.log(i);  // Keys are stored in i 
    console.log(student[i]); // Values are printed
}