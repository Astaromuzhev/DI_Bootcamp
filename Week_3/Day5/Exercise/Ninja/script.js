/*
    ASTAR 30/07/2023
    Create two objects, each object should hold a person’s details. Here are the details:
    FullName
    Mass
    Height
    Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
    Outside of the objects, create a JS function that compares the BMI of both objects.
    Display the name of the person who has the largest BMI.
*/
let STAR = {
    fullname : "Staromuzhev",
    mass : "60",
    heigth : "163",
    BMI : function(){
        return this.mass/this.heigth;
    }
}

let BLACK = {
    fullname : "Blackwood",
    mass : "106",
    heigth : "180",
    BMI : function(){
        return this.mass/this.heigth;
    }
}

switch (Math.max(STAR.BMI, BLACK.BMI)){
    case STAR.BMI:
        console.log(`${STAR.fullname} has largest BMI`);
        break;
    default:
        console.log(`${BLACK.fullname} has largest BMI`);
}

/*
    ASTAR 30/07/2023
    Exercise 2
    In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.
    Create a function called findAvg(gradesList) that takes an argument called gradesList.
    Your function must calculate and console.log the average.
    If the average is above 65 let the user know they passed
    If the average is below 65 let the user know they failed and must repeat the course.
    Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
    Hint One function must call the other.
*/
const MIN_PASS_SCORE = 65;

function findAvg(array) {
    return array.reduce((x,y) => x+y)/array.length
}

function isPassCource(array) {
    if (findAvg(array)>MIN_PASS_SCORE){
        return "You've successfully passed test";
    } else {
        return "You've failed test. Please, repeat the cource"
    }
}

let gradeList = [90,60,60,40,90];

console.log(isPassCource(gradeList));