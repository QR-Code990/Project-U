var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

window.onload = getRandomColor1();
window.onload = getRandomColor2();
window.onload = setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value + ")";
   // console.log(color1.value);
    css.textContent = body.style.background + ";";
}

function getRandomColor1() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color1.value = color;
   }

function getRandomColor2() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color2.value = color;
    }

function setRandomColor() {
    getRandomColor1();
    getRandomColor2();
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value
    + ", " 
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

//setGradient gets ran automatically with input.
color1.addEventListener("input", setGradient); 
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColor);