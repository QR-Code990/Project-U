var database = [{
        username: "Winnie",
        password: "passWord10020",
    } {
        username: "Tigger",
        password: "passWord10021",
    } {
        username: "Piglet",
        password: "passWord10022",
    }

];

var newsFeed = [{
        username: "Christopher",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Eeyore",
        timeline: "Need Lumber jack to help with logs"
    }

    {
        username: "Rabbit",
        timeline: "100 Acre Woods is having a sale!"
    }
];


function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}


function signIn(username, password) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);

    } else {
        alert("Sorry, this looks to be be the wrong username and password!");
    }

}

var userNamePrompt = prompt(" What\'s your name?");
var passWordPrompt = prompt("What\'s your password?");


signIn(userNamePrompt, passWordPrompt); //calling the function with 2 arguments to fit the function parameters