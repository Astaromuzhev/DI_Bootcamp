//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=6bc236fa8bd5e7e03f83fd8cea3eac74

//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
const API_key='6bc236fa8bd5e7e03f83fd8cea3eac74';
const API_limit = 1;

let city;
let country = "";

let form;

/*ASTAR 10/09/2023*/
getUnitsFromCheckBox = () => {
    return (document.getElementById("chack_box_id").checked==true) ? "imperial" :  "metric";
}

let units=getUnitsFromCheckBox();
const SCALE_TEMP_FIC = 2;

var isFunctionExecuted = false; 

window.addEventListener("load", function(event) {
    //Daniel, I have problem. I dont understand what event I have to use to run code only when web-page is open
    //Now thsi code works every add new city
     if (!isFunctionExecuted)
    {
        isFunctionExecuted = true;
        console.log("DOMContentLoaded");
        getCurrentPosition();  
    }
  });

/*ASTAR 09/07/2023 onsubmit form*/
function getWweatherByCity(e){
    e.preventDefault();
    console.log("Start getWweatherByCity ", city);
    getCurrentPosition();
    form = e.target;
    city = form.elements.search_city_id.value;

    // console.log( getUnitsFromCheckBox());
    // units = ( getUnitsFromCheckBox()==false) ? "imperial" :  "metric";// imperial
    units = getUnitsFromCheckBox();
    // console.log(units);
    if (!!city){   
        getCoordinatesByName(city);     //first API
    }
}

/*ASTAR 09/07/2023 get coordinates and call get weather with coordinates */
function getCoordinatesByName(city){
    console.log("Start getCoordinatesByName ", city);
    getCoordinatesFromJSON = (strJSON) => {
        //let json = 
        let coordinateObj =  [];
        coordinateObj.lat = JSON.parse(strJSON)[0].lat;
        coordinateObj.lon = JSON.parse(strJSON)[0].lon;
        country = JSON.parse(strJSON)[0].country;
        // console.log(coordinateObj);
        return coordinateObj;
    }

    const xhr = new XMLHttpRequest();
    xhr.timeout = 1000;
    
    xhr.open('GET', `http://api.openweathermap.org/geo/1.0/direct?q=${city}&units=${units}&limit=${API_limit}&appid=${API_key}`);
    xhr.send();

    xhr.onload = () => {
        // console.log(xhr);
        console.log(xhr.response);
        // console.log(xhr.response.length);
        if(xhr.response.length>2){//Daniel, i think its not good, please help me how to understand, that city is incorrect
        if(xhr.status === 200) {
            // console.log(xhr.response);
            getWeatherByCoordinate(getCoordinatesFromJSON(xhr.response));
            xhr.abort();    
        }
        else console.log((`${xhr.status} : ${xhr.statusText}`));
        // generateDocument(JSON.parse(xhr.response)); 
        } else {
            xhr.abort(); 
            let popup = document.getElementById('popup_applet_id');
            popup.style.display = 'block';
            let popup_content = document.getElementById('popup_applet_text_msg_id');
            popup_content.textContent = `The city ${city} is wrong. Please, enter correct city`;
        }
         //   alert(`The city ${city} is incorrect`)}
    }
    
    xhr.onerror = () => {
        console.log("Request second API failed");
    }

}
/*ASTAR 09/07/2023 get weather and call adding card to html*/
function getWeatherByCoordinate(coordObj){
    console.log("Start getWeatherByCoordinate ", city);
    console.log("coordObj>", coordObj);

    const xhr = new XMLHttpRequest();
    xhr.timeout = 1000;
    
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${coordObj.lat}&lon=${coordObj.lon}&units=${units}&appid=${API_key}`);
    xhr.send();

    xhr.onload = () => {
        console.log(xhr.response);
        if(xhr.status === 200) {
            addCardToDocument(xhr.response);
            xhr.abort();    
        }
        else console.log((`${xhr.status} : ${xhr.statusText}`));
        // generateDocument(JSON.parse(xhr.response)); 
    }
    
    xhr.onerror = () => {
        console.log("Request failed");
    }    
}
getCelsiusFromKelvin = (x) => (x-273.15).toFixed(SCALE_TEMP_FIC);
getCelsiusFromFarengeit = (x) => ((x-32)/1.8).toFixed(SCALE_TEMP_FIC);
getFarengeitFromCelsius = (x) => (x*1.8+32).toFixed(SCALE_TEMP_FIC);

function addCardToDocument(strInput){
    console.log("addCardToDocument", city);
    let a = JSON.parse(strInput);

    htmlString =`
    <div id="card_${city}" class = "card_city">
        <span class="close-button" onclick="closeProductCard(event)">&#10006;</span>
        <h4>${city}, ${country}</h4></br>
        <div class="temperature_value">${a.main.temp}\u00B0</div>
        <img src="https://openweathermap.org/img/wn/${a.weather[0].icon}@2x.png">
        <div>${a.weather[0].main}</div>
    </div>`;
    //<div>${getCelsiusFromKelvin(a.main.temp)} \u2103</div>
    let parentNode = document.getElementById("cards_area");
    let childNode = document.createElement("div");
    childNode.innerHTML = htmlString;

    parentNode.appendChild(childNode);
    if(!!form){
        form.reset();
    }
    // console.log(htmlString);
}
function changeScale(){
    units = getUnitsFromCheckBox();

    let arrOfTemperature = document.getElementsByClassName("temperature_value");

    for (let i=0;i<arrOfTemperature.length;i++){
        console.log(arrOfTemperature[i].innerHTML.slice(0, -1));
        if (units == "metric"){
            arrOfTemperature[i].innerHTML = getCelsiusFromFarengeit(arrOfTemperature[i].innerHTML.slice(0, -1)) + '\u00B0';
        } else {
            arrOfTemperature[i].innerHTML = getFarengeitFromCelsius(arrOfTemperature[i].innerHTML.slice(0, -1)) + '\u00B0';
        }
    }
}
function closeProductCard(e){
    // console.log(e.target.parentNode);
    let cardNode = e.target.parentNode;
    let parentNode = cardNode.parentNode;
 
    parentNode.remove(cardNode);
}
function getCurrentPosition(){
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          // Получаем координаты пользователя
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
      
          // Создаем запрос к сервису геолокации для получения информации о местоположении
          var geolocationServiceUrl = "https://nominatim.openstreetmap.org/reverse?lat=" + latitude + "&lon=" + longitude + "&format=json";
      
          // Отправляем запрос
          fetch(geolocationServiceUrl)
            .then(function(response) {
              return response.json();
            })
            .then(function(data) {
              // data содержит информацию о местоположении, включая текущий город
              city = data.address.city;
              getCoordinatesByName(city); 
              console.log("Текущий город: " + city);
            })
            .catch(function(error) {
              console.log("Ошибка при запросе геолокации: " + error.message);
            });
        });
      } else {
        console.log("Геолокация не поддерживается в вашем браузере.");
    }    
}  
function closePopupApplet(){
    let popup = document.getElementById('popup_applet_id');
    popup.style.display = 'none';
}








