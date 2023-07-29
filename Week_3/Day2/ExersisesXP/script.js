/*
    ASTAR 29/07/2023
    Exersise 1
    Store your favorite food into a variable.
    Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
    Console.log I eat <favorite food> at every <favorite meal>
*/

const FAV_FOOD = "Cottege", FAV_MEAL = "breakfast";

console.log("I eat " + FAV_FOOD + " at every " + FAV_MEAL);

/*
    ASTAR 29/07/2023
    Exercise 2
    Part I
    Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
    Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
    Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
    For example : black mirror, money heist, and the big bang theory
    Console.log a sentence using both of the variables created above
    For example : I watched 3 series : black mirror, money heist, and the big bang theory


    Part II
    Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
    Add, at the end of the array, the name of another series you watched.
    Add, at the beginning of the array, the name of your favorite series.
    Delete the series “black mirror”.
    Console.log the third letter of the series “money heist”.
    Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
*/

const MY_WATCHED_SERIES = ["black mirror", "money heist", "the big bang theory"];
console.log(MY_WATCHED_SERIES);

let myWatchedSeriesLength = MY_WATCHED_SERIES.length;
let myWatchedSeriesSentence = MY_WATCHED_SERIES.join(", ");

console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`); //Part I

MY_WATCHED_SERIES[MY_WATCHED_SERIES.indexOf("the big bang theory")] = "friends";
MY_WATCHED_SERIES[MY_WATCHED_SERIES.length] = "grey's anatomy";
MY_WATCHED_SERIES.unshift("game of trones");
MY_WATCHED_SERIES.splice(1,1);

console.log(MY_WATCHED_SERIES[1][2]);

console.log(MY_WATCHED_SERIES);                                                       //Part II

/*
    ASTAR 30/07/2023
    Exercise 3
    Store a celsius temperature into a variable.
    Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
    Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
    Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
*/

function celsius_to_faringate(numCelsium){
    return numCelsium/5*9+32;
}

let cels_temp = 32;
console.log(`${cels_temp}°C is ${celsius_to_faringate(cels_temp)}°F`);

/*
    ASTAR 30/07/2023
    Exercise 4
    For each expression, predict what you think the output will be in a comment (//) without first running the command.
    Of course, explain each prediction.
    Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
*/
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will output 55, because a and b - numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: It will output 23, because a and b - numbers
// Actual: 23

console.log(c);//What is the value of c?
//Prediction: undefined
//Actual: undefined

console.log(3 + 4 + '5');//Analyse the code below, what will be the outcome?
//Prediction: 75
//Actual: 75

/*
    ASTAR 30/07/2023
    Exercise 5
    For each expression, predict what you think the output will be in a comment (//) without first running the command.
    Of course, explain each prediction.
    Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
*/

console.log(typeof(15));
// Prediction: Number
// Actual: number

console.log(typeof(5.5));
// Prediction: Number
// Actual: number

console.log(typeof(NaN));
// Prediction: ?
// Actual: number

console.log(typeof("hello"));
// Prediction: string
// Actual: string

console.log(typeof(true));
// Prediction: boolean
// Actual: boolean

console.log(typeof(1 != 2));
// Prediction: boolean
// Actual: boolean

console.log("hamburger" + "s");
// Prediction: hamburgers
// Actual:hamburgers

console.log("hamburgers" - "s");
// Prediction: hamburger
// Actual: Nan

console.log("1" + "3");
// Prediction: 13
// Actual:

console.log("1" - "3");
// Prediction: NaN
// Actual: -2

console.log("johnny" + 5);
// Prediction: johnny5
// Actual: johnny5

console.log("johnny" - 5);
// Prediction: Nan
// Actual:NaN

console.log(99 * "hello");
// Prediction: NaN
// Actual: NaN

console.log(1 != 1);
// Prediction: false
// Actual: false

console.log(1 == "1");
// Prediction: true
// Actual: true

console.log(1 === "1");
// Prediction: false
// Actual: false

/*
    ASTAR 30/07/2023
    Exercise 6
    For each expression, predict what you think the output will be in a comment (//) without first running the command.
    Of course, explain each prediction.
    Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.    
*/
console.log(5 + "34");
// Prediction: 534
// Actual: 534

console.log(5 - "4");
// Prediction: 1
// Actual: 1

console.log(10 % 5);
// Prediction: 0
// Actual: 0

console.log(5 % 10);
// Prediction: -1
// Actual: 5

console.log("Java" + "Script");
// Prediction: JavaScript
// Actual: JavaScript

console.log(" " + " ");
// Prediction: "  "
// Actual: "  "

console.log(" " + 0);
// Prediction: " 0"
// Actual: " 0"

console.log(true + true);
// Prediction: NaN
// Actual: 2

console.log(true + false);
// Prediction: 1
// Actual: 1

console.log(false + true);
// Prediction: 1
// Actual: 1

console.log(false - true);
// Prediction: -1
// Actual: -1

console.log(!true);
// Prediction: false
// Actual: false

console.log(3 - 4);
// Prediction: -1
// Actual: -1

console.log("Bob" - "bill");
// Prediction: Nan
// Actual:NaN

