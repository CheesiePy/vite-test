// login.js

// check if user is already logged in
const loggedIn = false;

const login = (email, password) => {
  // check if email and password match a user in the database
  if (email === "user@email.com" && password === "password") {
    loggedIn = true;
    console.log("Login successful!");
  } else {
    console.log("Invalid email or password. Please try again.");
  }
};

const logout = () => {
  loggedIn = false;
  console.log("Logout successful!");
};



// Create the form
const form = document.createElement("div");
form.setAttribute("id", "login-form");

// Create email input
const emailLabel = document.createElement("label");
emailLabel.innerHTML = "UserName: ";
const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email-input");

// Create password input
const passwordLabel = document.createElement("label");
passwordLabel.innerHTML = "Password: ";
const passwordInput = document.createElement("input");
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password-input");

// Create submit button
const submitBtn = document.createElement("button");
submitBtn.innerHTML = "Login";


// Add elements to the form
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(submitBtn);

// export the form
export { form, emailInput, passwordInput, submitBtn, login, logout, loggedIn};
