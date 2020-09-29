var characters = prompt("Please enter your tweet!", "Test Test Test");
var charactersWritten = characters.length;
var charactersLeftOver = 140 - charactersWritten;

var characterSlice = (characters.slice(0,180));
alert(characterSlice + "\n \n" + "You have written " + charactersWritten + " characters, you have " + charactersLeftOver + " character left." );

//Program math always count at number 0 then 1 and then 2.
//To add a break or new line you can use "\n" + "\n" or "\n \n".
