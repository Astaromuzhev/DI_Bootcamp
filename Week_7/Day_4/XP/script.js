/*ASTAR 08/29/2023*/
/*Ex1*/

sumElem = (a,b) => {return a+b}
console.log(sumElem(5,12));

/*Ex2*/
function kgToGramm(numOfKg){//function declaration
    return numOfKg*1000
}
console.log(kgToGramm(22))
//console.log(transKgToGramm(22))-error bexause not hoisted
let transKgToGramm = function(numOfKg){//function expression
    return numOfKg*1000
}
console.log(kgToGramm(22))
console.log(transKgToGramm(22))


//function declaration is hoisted, function expression isn't hoisted

kg2Gramm = (numOfKg) => (numOfKg*1000)
console.log(kg2Gramm(22));

 /*Ex3*/
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function(numOfChildren, partnersName, geograficLoc, jobTitle) {
    let bodyElem = document.getElementsByTagName("body")[0];

    if (!!bodyElem){
        let childElem = document.createElement("div");
        childElem.textContent = `You will be a ${jobTitle} in ${geograficLoc}, and married to ${partnersName} with ${numOfChildren} kids.`
        bodyElem.appendChild(childElem)
    }

})(4, "Andrey", "TA", "developer")

/*Ex4*/
function addUserInvitation(e){
    e.preventDefault();
    (function(userName){
        if (!!userName){
            let bodyElem = document.getElementsByTagName("body")[0];

            if (!!bodyElem){
                let invitNodeElem = document.getElementById("invitation_node_id");
                if(!!invitNodeElem){
                    bodyElem.removeChild(invitNodeElem);
                }
                let imgElement = document.createElement('img');
                imgElement.setAttribute("src", "./IMAGE/Anna_Profile.jpg");
                imgElement.setAttribute("width", "30px");
                imgElement.setAttribute("style", "border-radius: 50%");

                invitNodeElem = document.createElement("div");
                invitNodeElem.id = "invitation_node_id";
                invitNodeElem.textContent = `Online ${userName}`;

                invitNodeElem.appendChild(imgElement);
                bodyElem.appendChild(invitNodeElem);
            }
        }
    })(e.target.elements.user_name.value)
}

/*Ex5.1*/

 makeJuice = (beverageSize = "small") => (firts_ingr, second_ingr, third_ingr) => {
    let bodyElem = document.getElementsByTagName("body")[0];

    if (!!bodyElem){
        let childElem = document.createElement("div");
        childElem.textContent = `The client wants a ${beverageSize} juice, containing ${firts_ingr}, ${second_ingr}, ${third_ingr}.`
        bodyElem.appendChild(childElem)
    }
}
;

makeJuice("middle")("Vodka", "Beer", "Tomat Juice");

/*Ex5.2*/
makeJuice2 = (beverageSize) => {
    const ingredients = [];

    addIngredient = (newIngr) => ingredients.push(newIngr);

    addIngredients("Orange Juice", "Espresso", "Ice");
    addIngredients("Watermelon Juice", "Salt", "Cactus");
    displayJuice();

    function displayJuice(){
        let childDiv = document.createElement("div");
        childDiv.innerHTML = `<p>The client wants a ${beverageSize} juice, containing ${ingredients.join(", ")}.</p>`;

        document.getElementsByTagName("body")[0].appendChild(childDiv);
    }
    function addIngredients(a,b,c){
        addIngredient(a);
        addIngredient(b);
        addIngredient(c);    
    }
}

makeJuice2("large");

