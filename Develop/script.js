// Assignment code here
var generateBtn = document.querySelector("#generate");


var passwordMost = 128;
var passwordLeast = 8;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "`~!@#$%^&*()_+=-,<.>/?';:[{]}|";






  // 1. create prompts. 

  /**
   *    PROMPTS IN README FILE
   */

  //  a. Password length has min of 8 and max of 128


  // WORKING CODE
  function getPasswordLength () {
    var PasswordLength = 0;
    while (PasswordLength < passwordLeast || PasswordLength > passwordMost) {
      PasswordLength = prompt("Please choose how long you want your password. You can pick between " + (passwordLeast) + ' - ' + (passwordMost) + '.');
      if (PasswordLength > passwordMost) {
        alert("Please keep your password within " + (passwordMost) + ' charecters.')
        } else if (PasswordLength < passwordLeast) {
          alert("Please keep your password at least " + (passwordLeast) + ' or more characters long.')
      } 
    }
    return PasswordLength
  }
// WORKING CODE


  //  b. use numbers, lowercase, uppercase, or special characters options
  function getRandomSymbol () {
    var getSymbols = 'yes';
    getSymbols = prompt("Do you want symbols in your password?");
    

}
  function getRandomNumber () {

  }
  function getRandomUppercase () {
    
  }
  function getRandomLowercase () {
    
  }

  // 2. validate the input.



  // 3. generate password
  function generatePassword() {
    console.log("button clicked")
  getPasswordLength ();


 


  
  // 4. display password back to user.
  return "I clicked the button"
}
























































// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





  
