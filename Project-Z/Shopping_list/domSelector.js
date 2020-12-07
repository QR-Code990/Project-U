//variables set to allow document to run efficiently.
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

    li.addEventListener("click", function () {
        // creates a boolean that toggles the done class on li:
        // if the list item is clicked this toggles the done class
        var finished = this.classList.toggle("done");
        // creates a remove button for the finished item:
        var removeButton = document.createElement("button");
        removeButton.classList.add("deleteButton");

        // if the list item is clicked (li add event listener) then finished is true
        if (finished) {
            removeButton.appendChild(document.createTextNode("remove"));
            removeButton.classList = "deleteButton";
            li.appendChild(removeButton);

            removeButton.addEventListener("click", function () {
                this.parentElement.remove();
            });
        } else {
            this.getElementsByClassName("deleteButton")[0].remove();
        }
    })

    input.value = "";

}


//clicking method if the entry is greater than 0 the new item will be entered.
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