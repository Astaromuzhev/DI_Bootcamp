/*
    ASTAR 05/08/2023
    Exercise 1

    Part I : function with no parameters
    Create a function called infoAboutMe() that takes no parameter.
    The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
    Call the function.

    Part II : function with three parameters
    Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
    The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
    Call the function twice with the following arguments:
    infoAboutPerson("David", 45, "blue")
    infoAboutPerson("Josh", 12, "yellow")
*/
function infoAboutMe(){
    console.log("I'm Anna Staromuzhev, 38 years old. I like dance, workouts and spend time with family");
}

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
}

infoAboutMe();
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

/*
    ASTAR 05/08/2023
    Exercise 2

    John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
    Create a function named calculateTip() that takes no parameter.
    Inside the function, use prompt to ask John for the amount of the bill.
    Here are the rules
    If the bill is less than $50, tip 20%.
    If the bill is between $50 and $200, tip 15%.
    If the bill is more than $200, tip 10%.
    Console.log the tip amount and the final bill (bill + tip).
    Call the calculateTip() function.
*/
function calculateTip(){
    let billAmount = prompt("Enter amount of bill");
    //let billAmount = 60;
    let tipAmount = 0;

    if(isNaN(billAmount)){
        console.log("John, durling, please enter number and dont drive, you're drink a lot");
    } else {
        billAmount = Math.abs(Number(billAmount));

        if (billAmount<50){
            tipAmount = billAmount*0.2;
        } else if (billAmount<200){
            tipAmount = billAmount*0.15;
        } else {
            tipAmount = billAmount*0.1;
        }
        console.log(`John, please pay ${billAmount+tipAmount} - bill - ${billAmount} plus ${tipAmount} tip`);
    }
}

calculateTip();
/*
    ASTAR 05/08/2023
    Exercise 3

    Create a function call isDivisible() that takes no parameter.
    In the function, loop through numbers 0 to 500.
    Console.log all the numbers divisible by 23.
    At the end, console.log the sum of all numbers that are divisible by 23.
    Bonus: Add a parameter divisor to the function.

*/
function isDivisible(dividend,divisor){
    let sumDivident = 0;
    let outcomeString = "Outcome :";
    for(let i=0;i<dividend;i++){
      //  console.log(i % divisor);
        if ( i % divisor === 0){
            outcomeString = outcomeString + " " + i;
            //console.log(i);
            sumDivident = sumDivident + i;
        }
    }
    console.log(outcomeString);
    console.log(`Sum: ${sumDivident}`);
}

isDivisible(500, 23);
isDivisible(500,3);
isDivisible(500,45);
/*
    ASTAR 05/08/2023
    Exercise 4

    Add the stock and prices objects to your js file.
    Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
    Create a function called myBill() that takes no parameters.
    The function should return the total price of your shoppingList. In order to do this you must follow these rules:
    The item must be in stock. (Hint : check out if .. in)
    If the item is in stock find out the price in the prices object.
    Call the myBill() function.
    Bonus: If the item is in stock, decrease the item’s stock by 1
*/
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList = ["banana", "orange", "apple", "pear"];

function myBill(){
    let totalPrice = 0;
    console.log("Stock before shopping:");
    console.log(stock);
    console.log("ShopList:");
    console.log(shoppingList);

    for(let i=0;i<shoppingList.length;i++){
        if(shoppingList[i] in stock){
            if(stock[shoppingList[i]]>0){
                totalPrice = totalPrice + prices[shoppingList[i]];
                stock[shoppingList[i]] = stock[shoppingList[i]] - 1;
            }
        }
    }
    console.log(`Total price ${totalPrice}`);
    console.log("Stock after shopping:");
    console.log(stock);
};

myBill();
/*
    ASTAR 05/08/2023
    Exercise 5

    Read the illustration (point 4), while reading the instructions
    1.  Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
    an item price
    and an array representing the amount of change in your pocket.
    2.  In the function, determine whether or not you can afford the item.
    If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
    If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
    3.  Change will always be represented in the following order: quarters, dimes, nickels, pennies.
    A quarters is 0.25
*/
const priceOfChange = [0.25, 0.1, 0.05, 0.01];
function countPocket(amountOfChange){
    let sum = 0;
    for (let i=0;i<amountOfChange.length;i++){
        sum = sum + amountOfChange[i]*priceOfChange[i];
    }
    return sum;
}
function changeEnough(itemPrice, amountOfChange){
    if (itemPrice < countPocket(amountOfChange)){
        return true;
    } else {
        return false;
    }
}

console.log(changeEnough(4.25,[25,20,5,0]));
console.log(changeEnough(14.11, [2,100,0,0]) );
console.log(changeEnough(0.75, [0,0,20,5]) );
/*
    ASTAR 05/08/2023
    Exercise 6

    Let’s create functions that calculate your vacation’s costs:

    Define a function called hotelCost().
    It should ask the user for the number of nights they would like to stay in the hotel.
    If the user doesn’t answer or if the answer is not a number, ask again.
    The hotel costs $140 per night. The function should return the total price of the hotel.

    Define a function called planeRideCost().
    It should ask the user for their destination.
    If the user doesn’t answer or if the answer is not a string, ask again.
    The function should return a different price depending on the location.
    “London”: 183$
    “Paris” : 220$
    All other destination : 300$

    Define a function called rentalCarCost().
    It should ask the user for the number of days they would like to rent the car.
    If the user doesn’t answer or if the answer is not a number, ask again.
    Calculate the cost to rent the car. The car costs $40 everyday.
    If the user rents a car for more than 10 days, they get a 5% discount.
    The function should return the total price of the car rental.

    Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
    Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
    Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

    Call the function totalVacationCost()

    Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
*/
const PRICE_OF_HOTEL = 140;
const PRICE_OF_CAR_RENTAL = 40;
const CAR_RENTAL_DAYS_FOR_DISCOUNT = 10;
const CAR_DISCOUNT = 0.05;
const priceOfDestination = {"London": 183, "Paris":220, "Defualt":300}

function hotelCost(){
    let numberOfNights;
    
    do {
        numberOfNights = prompt("Please, enter number of nights");
        //if (isNaN(numberOfNights))
        if (numberOfNights === null)
            return;        
    } while (isNaN(numberOfNights))

    //console.log(numberOfNights*PRICE_OF_HOTEL);
    return numberOfNights*PRICE_OF_HOTEL;
}
function planeRideCost(){
    let userDestination;
    
    do {
        userDestination = prompt("Please, enter your destination");
        if (userDestination === null)
            return;
    } while (typeof(userDestination) == 'string' && !isNaN(userDestination))  
    if (userDestination in priceOfDestination) 
    {
        //console.log(`Price of ${userDestination} is ${priceOfDestination[userDestination]}`);
        return priceOfDestination[userDestination];
    } else {
        //console.log(`Price of ${userDestination} is ${priceOfDestination["Defualt"]}`);
        return priceOfDestination["Defualt"];
    }
}
function rentalCarCost(){
    let numberOfDays;
    
    do {
        numberOfDays = prompt("Please, enter number of car's renting days");
        //if (isNaN(numberOfNights))
        if (numberOfDays === null)
            return;        
    } while (isNaN(numberOfDays))
    if (numberOfDays > CAR_RENTAL_DAYS_FOR_DISCOUNT){
        //console.log(numberOfDays*PRICE_OF_CAR_RENTAL*(1-CAR_DISCOUNT));
        return numberOfDays*PRICE_OF_CAR_RENTAL*(1-CAR_DISCOUNT);
    } else {
        //console.log(numberOfDays*PRICE_OF_CAR_RENTAL);
        return numberOfDays*PRICE_OF_CAR_RENTAL;
    }
}

function totalVacationCost(){
    console.log("Your offer is:");

    console.log(`The car cost: ${rentalCarCost()}, the hotel cost: ${hotelCost()}, the plane tickets cost: ${planeRideCost()}.`);
}

totalVacationCost();
