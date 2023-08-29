/*ASTAR 08/29/2023*/
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

displayGroceries = () => ( groceries.fruits.forEach( (element) => console.log("fruit>", element)) )

displayGroceries();

cloneGroceries = () => {
    console.log("Startof cloneGroceries");
    let user = client;
    client = "Betty"
    console.log(user); //like client, becuase its simple data type

    let shopping = {...groceries}
    groceries.totalPrice = "35$";
    console.log(shopping);//we dont see changes in shopping, because we cloned object
    groceries.other.paid = false;
    console.log(shopping);//we see changes in shopping, because this is reference to 1 address in memory
}

cloneGroceries();
