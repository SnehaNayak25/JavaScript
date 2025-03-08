/*
    1. Create a function using the "function" keyword that takes a string as an argument & 
    returns the number of vowel in the string.

    2. Create an arrow function to perform the same task
*/

function vowelCount(str)
{
    let count = 0;
    for(const c of str)
    {
        if(c ==='a' || c ==='e' || c === 'i' || c==='o' || c==='u' ||
            c ==='A' || c ==='E' || c === 'I' || c==='O' || c==='U')
        {
            count ++;
        }
    }
    console.log(count);
}
str = prompt("Enter a string: ")
vowelCount(str);


// using arrow function
const countVowel = (str) => {
    let count = 0;
    for(const c of str)
    {
        if(c ==='a' || c ==='e' || c === 'i' || c==='o' || c==='u' ||
            c ==='A' || c ==='E' || c === 'I' || c==='O' || c==='U')
        {
            count ++;
        }
    }
    console.log(count);
};

str1 = prompt("Enter a string: ")
countVowel(str1);
