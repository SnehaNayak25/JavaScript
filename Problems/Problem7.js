/*
    For a given array with prices of 5 items -> [250,645,300,900,50]
    All items have an offer of 10% OFF on them.
    Change the array to store final price after applying offer.
*/

let price = [250,645,300,900,50]

for(let i=0;i<price.length;i++)
{
    let offer = price[i]/10;
    price[i] -= offer;
}
console.log(price); //[225, 580.5, 270, 810, 45]