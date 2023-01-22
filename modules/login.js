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

export { login, logout, loggedIn };