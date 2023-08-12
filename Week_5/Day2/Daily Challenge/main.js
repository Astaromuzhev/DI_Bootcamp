/*
      ASTAR 13/08/2023
*/
let form;
let noun;
let adjectve;
let person;
let verb;
let place;
let strStory;
let iterationCount = 0;
const MAX_ITERATION_COUNT = 3;

/*Generate Tag and insert Story. If Story is exist - clear*/
function generateTag(strInner) {
    let storyTag = document.getElementById("story");
    let textTag = document.getElementsByClassName("textTagClass");
    let buttonTag = document.getElementById("shuffle-button");
    console.log(textTag);
    console.log(textTag[0]);
    if(textTag.length>0){
        storyTag.removeChild(textTag[0]);
        if (buttonTag!=null){
            storyTag.removeChild(buttonTag);
        }
    }

    textTag = document.createElement("tag");
    textTag.className = "textTagClass";
    textTag.innerHTML = "<p>" + strInner + "</p>";
    storyTag.appendChild(textTag);
   
    buttonTag = document.createElement("button");
    buttonTag.id = "shuffle-button";
    buttonTag.setAttribute("onclick", 'shuffleStory()');
    buttonTag.textContent = "Shuffle!";
    storyTag.appendChild(buttonTag);
}
/*main listener function */
function generateStory(e) {
    e.preventDefault();

    iterationCount=0;
    form = e.target;

    noun = form.elements.noun.value;
    adjective = form.adjective.value;
    person = form.person.value;
    verb = form.verb.value;
    place = form.place.value;

    if (noun == "" || adjective == "" || person == "" || verb == "" || place == "") {
        alert("Please, enter all fields");
        return;
    }
    strStory = noun + " " + person + " " + verb + " " + adjective + " " + place;
    generateTag(strStory);
}
/*take from chatGPT*/
function shuffleArray(array) {
    console.log("shuffleArray");
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}
/*shuffle words MAX_ITERATION_COUNT times and after remove button*/
function shuffleStory() {
    console.log("shuffleStory");
    console.log(iterationCount);
    console.log(MAX_ITERATION_COUNT);
    strStory = "";  
    if (iterationCount<MAX_ITERATION_COUNT){
        const arrayWords = [noun, person, verb, adjective, place];
        shuffleArray(arrayWords);
        console.log(arrayWords);
        
        for (let i=0; i<arrayWords.length; i++){
            strStory = strStory + " " + arrayWords[i];
        }
        console.log(strStory);
        generateTag(strStory);
        //let textTag = document.getElementsByClassName("textTagClass");
        //textTag[0].innerHTML = "<p>" + strStory + "</p>";

        iterationCount++;
        if(iterationCount === MAX_ITERATION_COUNT){
            let storyTag = document.getElementById("story");
            let button = document.getElementById("shuffle-button");
            storyTag.removeChild(button);
        }
    }

}