// Assignment code here
var generateBtn = document.querySelector("#generate");

const passwordMost = 128;
const passwordLeast = 8;
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "`~!@#$%^&*()_+=-,<.>/?';:[{]}|";





function generatePassword() {
  console.log("button clicked")

  // 1. create prompts. 
  
  window.prompt("How long is your password? (Select a number between 8 - 128.)")

  window.prompt("Do you want uppercase letters in your password?")

  window.prompt("Do you want lowercase letters in your password?")

  window.prompt("Do you want numbers in your password?")

  window.prompt("Do you want symbols in your password?")

  //  a. Password length has min of 8 and max of 128

function PasswordLength () {
  var passwordLength = 0;
  while (passwordLength < passwordLength || passwordLength > passwordMost) {
    window.prompt("How long is your password? (Select a number between 8 - 128.)")
  }
}

  //  b. use numbers, lowercase, uppercase, or special characters options
  // 2. validate the input.
  // 3. generate password
  


// 4. display password back to user.
  return "Generated password here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
