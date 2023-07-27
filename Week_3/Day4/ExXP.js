/*
    ASTAR 27/07/2023
    Exersise 1
    Instructions
    1.  Create 2 variables, x and y. Each of them should have a different numeric value.
    2.  Write an if/else statement that checks which number is bigger.
*/

let x = 124;
let y = 128;

let strMessage = "";

if (x > y) {
    strMessage = "x is the biggest number";
} else if (y > x) {
    strMessage = "y is the biggest number";
} else {
    strMessage = "x equal y";
}

console.log (strMessage);

/*
    ASTAR 27/07/2023
    Exercise 2: Chihuahua
    Instructions
    Create a variable called newDog where it’s value is “Chihuahua”.
    Check and display how many letters are in newDog.
    Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
    Check if the variable newDog is equal to “Chihuahua”
    if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
    else, console.log ‘I dont care, I prefer cats’
*/

    let newDog = "Chihuahua";
    const FAV_DOG = "Chihuahua";

    strMessage = "String '" + newDog +"' has "

    if (newDog.length > 1) {
        strMessage = strMessage + newDog.length + " letters";
    } else if (newDog.length == 1){
        strMessage = strMessage + newDog.length + " letter";
    } else {
            strMessage = strMessage + " no letters" 
    }

    console.log (strMessage);

    console.log("String '" + newDog + "' in Uppercase is " + newDog.toUpperCase());
    console.log("String '" + newDog + "' in lowercase is " + newDog.toLowerCase());

    strMessage = "I dont care, I prefer cats";
    if (newDog === FAV_DOG)
    {
        strMessage = "I love Chihuahuas, it’s my favorite dog breed";
    }
    
    console.log(strMessage);

/*
    ASTAR 27/07/2023
    Exercise 3: Even Or Odd
    Instructions
    Prompt the user for a number and save it to a variable.
    Check whether the variable is even or odd.
    If it is even, display: “x is an even number”. Where x is the actual number the user chose.
    If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
*/

    let enterStr = "";

    const ERROR_NUMERIC_MESSAGE = "Please, enter correct number";
    enterStr = prompt("Please, enter a number");

    if ( isNaN(enterStr)) {
        alert(ERROR_NUMERIC_MESSAGE);   
        //enterStr = prompt("Please, enter a number"); use with loop
    } else {
        if (    (Number(enterStr) % 2) === 0 ) {
            strMessage = enterStr + " is an even number";
        }
        else {
            strMessage = enterStr + " is an odd number";
        }
    }
    console.log(strMessage);

/*
    ASTAR 27/07/2023
    Exercise 4: Group Chat
    Instructions
    Below is an array of users that are online in a group chat.

    const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
    Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
    If there is no users (the users array is empty), console.log “no one is online”.
    If there is 1 user, console.log “<name_user> is online”.
    If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
    If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
    For example, if there are 5 users, it should display:
    name_user1, name_user2 and 3 more are online
*/

    const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

    let numOnlineUsers = users.length;

    switch (numOnlineUsers) {
        case 0:
            strMessage = "No one is online";
            break;
        case 1:
            strMessage = users[0] + " is online";
            break;
        case 2:
            strMessage = users[0] + " and " + users[1] + " are online";
            break;
        default:
            strMessage = users[0] + ", " + users[1] + " and " + (numOnlineUsers-2) + " more are online";
    }

    console.log(strMessage);

    console.log("כל הכבוד, אנה");

