//variables set to allow document to run efficiently.
//Will allow the HTML page to have a cache value.
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


//prohibits empty entry values from populating the list.
function inputLength() {
    return input.value.length;
}

//Appends the new item entered to the bottom of the list.
//list item -> Child of the UL -> Child of the Li = placement of the new entry item.
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

//upon clicking if the entry is greater then 0 the new item will be entered.
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

//if the keycode is 13 "enter" then the code will populate the list with new entry item.
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

//adding the events
button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeypress);