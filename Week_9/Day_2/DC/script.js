
function generateDOM(e){
    e.preventDefault();
    const obj = {};

    obj.name = e.target.elements.first_name_id.value;
    obj.lastname = e.target.elements.last_name_id.value;

    const jsonObj = JSON.stringify(obj);

    let parElement = document.getElementById("json_content_id");
    let divElement = document.createElement("div");

    divElement.textContent = jsonObj;
    parElement.appendChild(divElement);

    e.target.reset();

}