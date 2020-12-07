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

//adding the events for the callback function.
button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeypress);

// This is something called a callback function. When that line of javascript runs,  we don't want the 
// addLisAfterClick function to run because we are just adding the event listener now to wait for click or keypress. 
// We want to let it know though that we want this action to happen when a click happens. 
// So the function now automatically gets run (gets added the ()) every time the click happens. 
// So we are passing a reference to the function without running it.