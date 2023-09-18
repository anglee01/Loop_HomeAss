//Chapter 17 - 20 (for Loops) Home Assignment
//q1
var i;
for(i=0;i<10;i++){
console.log("We are learning javascript");
}
//q2
for (var i = 0; i <= 11; i++) {
    console.log("Loop iteration " + i);
}

//q3
for(var i=0;i<=4;i++){

}
//q4
for (var counter = 1; counter < 101; counter++) {
    console.log("welcome");
}
//q5
for (let i = 3; i > 0; i--) {
console.log("Hello");
}
//q6
var arr=[2,3,4,5];
console.log("The elements of the array are:"+" "+arr);
//q7
var  flag = true; 
if(flag===true){
    console.log("The statement is correct");
}
else{
    console.log("The statement is wrong");
}
//Q8
var pets = ["dog", "cat", "fish", "pegion", "parrot"];

for (let i = 0; i < pets.length; i++) {
    console.log("I have a pet animal");
}
//q9
for (var i = 1; i <= 10; i++) {
    if (i === 2) {
        alert("It should be: " + (i - 1));
    }
}
//q10
var arr;
arr[0]=prompt("Enter the first name");
//q11
// Create an array of user names
var userNames = ["Hamza", "Benny", "Ahmed", "Esha", "liz"];
// Prompt the user to enter their first name
var firstName = prompt("Enter first name");
// Initialize a variable to check if the name is found
var nameFound = false;
// Loop through the array of user names
for (var i = 0; i < userNames.length; i++) {
    // Check if the entered name matches a name in the array
    if (firstName === userNames[i]) {
        nameFound = true;
        break; // Exit the loop if a match is found
    }
}
// Check if the name was found and display a message accordingly
if (nameFound) {
    alert("Name found in the array!");
} else {
    alert("Name not found in the array.");
}
//q11
var list=["mango","apple","banana"];
var matchFound = false;
var userInput=prompt("Enter a fruit ");
for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
        alert("Match found");
        matchFound = true;
        break;
    }
}
// Check if a match wasn't found and display an alert
if (!matchFound) {
    alert("Match not found");
}
//q12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
// Main loop to iterate through the first array
for (var i = 0; i < firstArr.length; i++) {
    // Nested loop to iterate through the second array
    for (var j = 0; j < secondArr.length; j++) {
        // Concatenate elements from both arrays and display
        console.log(firstArr[i] + secondArr[j]);
    }
}
////////////////////////////THE END///////////////////////////