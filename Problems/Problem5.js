/* 
Prompting the user to enter full name. Generate a username for them based on the input.
Start username with @ , followed by their full name and ending with the fullname length.
    Example : username = "sanvi" , it should be "@sanvi5"
*/

let user_name = prompt("Enter the name: ");
let size = user_name.length;
let fullname = "@" + user_name + size;
console.log(fullname);



