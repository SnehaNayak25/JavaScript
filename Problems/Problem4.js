// Number guessing game - Until the user enters right number prompts the user to enter a number

let game_num = 25;
let user_num = prompt("Guess the game number: ");
while(user_num != game_num)
{
    user_num = prompt("You entered wrong number...Guess the number again");
}
console.log("Congratulations!.. you entered the right number..");