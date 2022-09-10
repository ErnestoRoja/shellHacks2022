let signButton = document.getElementById("sign-button");
let registerButton = document.getElementById("register-button");

signButton.addEvenetListener("click", (e) =>{
    let email = document.getElementById("email-input");
    email = email.value;
    localStorage.setItem("email", email);
    let password = document.getElementById("password-input");
    password = password.value;
    localStorage.setItem("password", password);
})

registerButton.addEventListener("click", (e) => {
    let firstName = document.getElementById("first-name-input");
    firstName = firstName.value;
    localStorage.setItem("FirstName", firstName);

    let lastName = document.getElementById("last-name-input");
    lastName = lastName.value;
    localStorage.setItem("LastName", lastName);

    let newEmail = document.getElementById("new-email-input");
    newEmail = newEmail.value;
    localStorage.setItem("NewEmail", newEmail);

    let newPassword = document.getElementById("new-password-input");
    newPassword = newPassword.value;
    localStorage.setItem("NewPassword", newPassword);
})