/*
    ASTAR 30/07/2023
    Exercise 1
    let sentence = ["my","favorite","color","is","blue"];
    Write some simple Javascript code that will join all the items in the array above, and console.log the result.
*/
let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(" "));

/*
    ASTAR 30/07/2023
    Exercise 2
    Create 2 variables. The values should be strings. For example:
    let str1 = "mix";
    let str2 = "pod";
    Slice out and swap the first 2 characters of the two strings from part 1.
    Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
    Finally console.log the new concatenated string
*/
function slice_strings(str1, str2, slice_pos){
    return str2.substring(0,slice_pos) + str1.slice(slice_pos) + " " + str1.substring(0,slice_pos) + str2.slice(slice_pos) ;
}
console.log(slice_strings("mix", "pod",2));
console.log(slice_strings("Hello", "World",2));

/*
    ASTAR 30/07/2023
    Exercise 3
    Make a Calculator. Follow the instructions:
    Prompt the user for the first number.
    Store the first number in a variable called num1.
    Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
    Prompt the user for the second number.
    Store the second number in a variable called num2.
    Create an Alert where the value is the SUM of num1 and num2.
    BONUS: Make a program that can subtract, multiply, and also divide!    
*/
function sum(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}

let isNum = false;

let num1 = prompt("Please, enter number 1");
isNum = isNaN(num1);
while (isNum) {
    let num1 = prompt("Pease, enter correct number");
    isNum = isNaN(num1);
}

if (num1 != null){//do not show 2nd dialog if first cancelled
    num1 = Number(num1);
    let num2 = prompt("Please, enter number 2");
    isNum = isNaN(num2);
    while (isNum) {
        let num2 = prompt("Pease, enter correct number");
        isNum = isNaN(num2);
    }
    
    if (num2 != null){//do not show 3rd dialog if second cancelled
        num2 = Number(num2);
        let operation = "SUM";

        operation = prompt("Please, enter operation: sum, subtract, multiply, divide");
        console.log(operation);
        console.log(operation.toUpperCase());
        switch(operation.toUpperCase()){
            case "SUM":
                alert(sum(num1, num2));
                break;
            case "SUBTRACT":
                alert(subtract(num1,num2));
                break;
            case "MULTIPLY":
                alert(multiply(num1,num2));
                break;
            case "DIVIDE":
                alert(divide(num1,num2));
                break;
            default:
                alert("You enter incorrect operation. SUM is " + sum(num1, num2));
        }
    }
}


//sum, subtract, multiply, and also divide






