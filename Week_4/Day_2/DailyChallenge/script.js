/*
    ASTAR 05/08/2023
    Prompt the user for several words (separated by commas).
    Put the words into an array.
    Console.log the words one per line, in a rectangular frame as seen below.
    Check out the Hints and Requirements below.
*/

function getMaxLengthArrayElement(inputArray){
    /* 
        ASTAR 05/08/2023
        return max length of arrays elements 
    */
    const arrayLength = new Array;
    for(let i=0; i<inputArray.length; i++){
       arrayLength[i] =  String(inputArray[i]).length;
    }    
    return Math.max(...arrayLength);
}

function setSymbolString(chSymbol, strLength){
    /*
        ASTAR 05/08/2023
        return string of chSymbols, strLength length
    */
    let returnString = "";
    for(let i=0; i<strLength; i++){
        returnString = returnString + chSymbol;
    }
    return returnString;

}

let inputString = prompt("Please, enter words. Use \", \" like separator");

const arrayString = inputString.split(", ");

const maxLength = getMaxLengthArrayElement(arrayString);

console.log(setSymbolString("*", maxLength + 8));
for (let i=0;i<arrayString.length;i++){
    console.log("*   " + arrayString[i] + setSymbolString(" ", maxLength - arrayString[i].length) + "   *" );
}

console.log(setSymbolString("*", maxLength + 8));

