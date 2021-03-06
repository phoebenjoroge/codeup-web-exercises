"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
var isAdmin =true;
if(isAdmin){
    // display specific value
    // (if isAdmin == false, then none of this code will run)
}
//TODO Together: Send a 20% off coupon if its users birthday
var birthday = "03-21";
if(birthday == "03-21"){
    alert("Happy birthday! You get 20% off");
    //other birthday other than 03-21 will not result in a discount code
}
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
var itsRainy = false;
if(itsRainy){
    alert("It's raining!");
    // if isRainy is false, none of the code inside {} will run
}
//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var userWallet = 100;
var itemCost = 25;
if(userWallet >= itemCost){
    alert("You can afford this item");
}else {
    alert("You cannot afford this item");
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
var numberOfLives =3;
numberOfLives--;

if(isGameOver(numberOfLives)){
    alert("Game over!")
}else  alert("You may keep playing the game");
// in function
function isGameOver(num){
    if(num <= 0){
        return true;
    }else
        return false;
}

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
var isSnow = true;
if(isSnow){
    alert("It' snowing!")
}
//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

var numberInput =21;
if(numberInput > 10){
    alert("True");
}


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
var adminMenu ="Home | contact | Login | About";
var userMenu ="Home | contact | Login | About";
if(isAdmin){
    console.log(adminMenu);
}else{
    console.log(userMenu);
}
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
if(itsRainy){
    alert("It's raining");
}else{
    alert("have a nice day!")
}



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
if (numberOfLives > 0){
    alert("Next level")
}else{
    alert("Sorry, game over")
}
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
if (isSnow){
    alert("It's snowing!")
}else{
    alert("Check back later for more details")
}
//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
if (numberInput> 10){
    alert("True, number is larger than 10")
}else{
    alert("The number is less than 10")
}
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 



//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
var overAge = confirm("Are you over the age of 13?");
if(overAge){
    alert("You may proceed");
}else{
    alert("You may not proceed");
}
// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

//TODO Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

var trafficLight = "green";
if(trafficLight == "green"){
    alert("It is safe, you may go");
}else if (trafficLight = "yellow"){
    alert("Prepare to come to a stop");
}else if(trafficLight == "red"){
    alert("Light is red, come to a complete stop!");
}else
    alert("Are you even a traffic stop?");




// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.
var userAge = 16;
var havePermit = true;
function youCanDrive(userAge, havePermit) {
    if (userAge < 15) {
        alert("You are not permitted for a learner's permit")
        if (userAge > 15) {
            alert("You may get a learner's permit");
        }
    } else {
        if (userAge == 15) {
            alert("You may get a learner's permit");
        } else if (userAge > 15 && havePermit) {
            alert("You are over 15 and have a permit, therefore you may get a license");
        } else if (userAge > 15 && !havePermit) {
            alert("You do not have a permit, therefore cannot get a license");
        }
    }
}






// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

var message;
var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);
message =(success) ? "Operation was successful" : "Oops, something went wrong";

// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

var weather = "sunny";
var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!
weatherMessage =(weather == "rainy") ? "It's raining!" : "Have a nice day because it's not raining";
alert(weatherMessage);

// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

