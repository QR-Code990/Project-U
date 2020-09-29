var name = prompt("What is your name?");

var upperCaseSlice = name.slice(0,1);
var upperCaseName = upperCaseSlice.toUpperCase();

var lowerCaseSlice = name.slice(1, name.length);
var lowerCaseName = lowerCaseSlice.toLowerCase();  //This code will also correct any names that lowercase the first letter and the rest are captalaize.

alert ("Hello, " + upperCaseName + lowerCaseName);

// var name = prompt("What is your name?");

// var upperCaseSlice = name.slice(0,1);
// var upperCaseName = upperCaseSlice.toUpperCase();
// var lowerCaseSlice = name.slice(1, name.length);
// // var lowerCaseName = lowerCaseSlice.toLowerCase();
// alert ("Hello, " + upperCaseName + lowerCaseSlice);
