/*
    1. Create an array to store companies -> "Infosys","Uber","Google","Microsoft","IBM","Netflix"
     a. Remove the first company from the array
     b. Remove Uber and add OLA in its place.
     c. Add Amazon at the end
*/

let companies = ["Infosys","Uber","Google","Microsoft","IBM","Netflix"];

// Removing first company from the array
first_ele = companies.shift()
console.log("Deleted element is ", first_ele);

// Removing Uber and replacing it with OLA
companies.splice(0,1,"OLA");
console.log(companies);

// Adding amazon at the end
companies.push("Amazon")
console.log(companies);