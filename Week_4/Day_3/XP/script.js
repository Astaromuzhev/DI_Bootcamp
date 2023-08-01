function playTheGame(){
    //    let messageText = "";
    
     /*
        //Option 1 - Once enter a number
     
        if (confirm("Would you like play the game?")==false){
            messageText("No problem, Goodbye");
        } else {
                let userNumber = prompt("Please, enter the number up 0 to 10");
                if (isNaN(userNumber)){
                    alert("Sorry, Not a number! Goodbye");
                } else {
                    userNumber = Number(userNumber);
                    if (!(userNumber>0 && userNumber<10)){
                        alert("Sorry, its not goof number! Goodbye");
                    } else {
                        let computerNumber = Math.round(Math.random()*10);
                        console.log(`computerNumber is ${computerNumber}`);
                        console.log(`userNumber is ${userNumber}`);                        
                        compareNumbers(userNumber,computerNumber);
                    }
                }
    
        }
    */
        //Bonus Option
        if (confirm("Would you like play the game?")==false){
            alert("No problem, Goodbye");
        } else {
                let userNumber;
                let exitFlag = true;
                userNumber = prompt("Please, enter the number up 0 to 10");
                console.log(userNumber);
                if (userNumber == null)
                return;
                do {
                    
                    if (isNaN(userNumber) || userNumber == null){
                        userNumber = prompt("Sorry, Not a number! Please, enter correct number up 0 to 10");
                        console.log(userNumber);
                    } else {
                        userNumber = Number(userNumber);
                        if (!(userNumber>0 && userNumber<10)){
                            userNumber = prompt("Sorry, its not good number! Please, enter correct number up 0 to 10");
                            console.log(userNumber);
                        } else {
                            exitFlag = false;
                        }
                    }
                    if (userNumber == null)
                        return;
                } while (exitFlag)//&& (userNumber<0 || userNumber>10))
    
                userNumber = Number(userNumber);
    
                let computerNumber = Math.round(Math.random()*10);
                console.log(`computerNumber is ${computerNumber}`);
                console.log(`userNumber is ${userNumber}`);                        
                compareNumbers(userNumber,computerNumber);
        }
    }
    
    function compareNumbers(userNumber,computerNumber){
        let exitFlag = false;
        let i = 0;
        do {
                if (userNumber == computerNumber){
                    exitFlag = true;
                    console.log("WINNER");
                    alert("WINNER!");
                } else if (userNumber < computerNumber) {
                    console.log("Your number is smaller then the computer’s, guess again");
                    userNumber = prompt("Your number is smaller then the computer’s, guess again");
                } else {
                    console.log(("Your number is bigger then the computer’s, guess again"));
                    userNumber = prompt("Your number is bigger then the computer’s, guess again");
                }
                i++;
        } while (!exitFlag && i<3)
        if (exitFlag == false){
            alert("Out of chance. LOSER!");
        }
    }