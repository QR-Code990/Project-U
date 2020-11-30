var database = [{
    username: "Winnie",
    password: "passWord10020",
}];

var newsFeed = [{
        username: "Christopher",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Eeyore",
        timeline: "Javasript is sooooo cool!"
    }
];

var userNamePrompt = prompt(" What's your name?");
var passWordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);

    } else {
        alert("Sorry, this looks to be be the wrong username and password!");
    }

}

signIn(userNamePrompt, passWordPrompt); //calling the function with 2 arguments to fit the function parameters