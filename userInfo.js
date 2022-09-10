var userInfo = new Map();
class User {
    constructor(firstName, lastName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        var subscriptions = new Array();
    }
}

function newUser() {
    // FIXME
   // if (userInfo.get(document.getElementById('new-email-input').value).firstName != undefined) {
        //print something
     //   console.log("reached");
      //  return;
   // }

    var user = new User(document.getElementById('first-name-input').value, document.getElementById('last-name-input').value, document.getElementById('new-password-input').value);
    userInfo.set(document.getElementById('new-email-input').value, user);
    alert("New User Login with first name: " + userInfo.get(document.getElementById('new-email-input').value).firstName);
}

function signIn() {
    var foundEmail = 0;
    console.log("hello");
    console.log(document.getElementById('email-input').value);
    console.log(userInfo.get(document.getElementById('email-input').value).firstName);
    console.log(userInfo.size);
    userInfo.forEach(function(key) {
        console.log("hello");
        console.log(document.getElementById('email-input').value);
        if (key == document.getElementById('email-input').value) {
            alert("found email");
            foundEmail = 1;
            return;
        }
    })

    if (foundEmail == 0) {
        alert("Email Not Found");
    }
    else {
        if(userInfo.get(document.getElementById('email-input').value).password == document.getElementById('password-input')) {
            alert("correct sign in");
        }
        else {
            alert("incorrect password");
        }
    }

}