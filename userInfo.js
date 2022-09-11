class User {
    constructor(firstName, lastName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        var subscriptions = new Array();
    }
}
/* ATTEMPT TO STORE MAP OF DATA IN localStorage
var userInfo = new Map();
if (localStorage.getItem('createdMap') == null) {
    var createdMap = false;
    localStorage.setItem('createdMap', createdMap);
}
var check = localStorage.getItem('createdMap');
if (check == false) {
    localStorage.setItem('createdMap', true)
    alert("initial case");
    var userInfo = new Map();
    var user = new User("admin", "admin", "admin");
    userInfo.set("admin", user);
    alert(userInfo.get("admin").firstName);
    localStorage.setItem('userInfo', userInfo);
}
*/

function newUser() {
    /* Attempt to Fix Duplicate Cases
    //FIXME
    if (userInfo.get(document.getElementById('new-email-input').value).firstName != undefined) {
        //print something
        console.log("reached");
        return;
    }
    */
    
    userInfo = localStorage.getItem('userInfo');
    //alert(localStorage.getItem('userInfo').get("admin").firstName);
    var user = new User(document.getElementById('first-name-input').value, document.getElementById('last-name-input').value, document.getElementById('new-password-input').value);
    var testString = document.getElementById('new-email-input').value;
    userInfo.set(testString, user);
    alert("New User Login with first name: " + userInfo.get(document.getElementById('new-email-input').value).firstName);
    localStorage.setItem('userInfo', userInfo);
}

function signIn() {
    // Master Login
    if (document.getElementById('email-input').value == "admin" && document.getElementById('password-input').value == "admin") {
        window.open('main.html');
        return;
    }
    
    var foundEmail = 0;
    console.log(document.getElementById('email-input').value);
    console.log(localStorage.getItem('userInfo').size);
    localStorage.getItem('userInfo').forEach(function(key) {
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
        if(localStorage.getItem('userInfo').get(document.getElementById('email-input').value).password == document.getElementById('password-input')) {
            alert("correct sign in");
        }
        else {
            alert("incorrect password");
        }
    }
    
}