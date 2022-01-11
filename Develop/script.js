// Assignment code here
var generateBtn = document.querySelector("#generate");


var passwordMost = 128;
var passwordLeast = 8;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "`~!@#$%^&*()_+=-,<.>/?';:[{]}|";






  // 1. create prompts. 
  //  a. Password length has min of 8 and max of 128


  // WORKING CODE
  function getPasswordLength () {
    var PasswordLength = 0;
    while (PasswordLength < passwordLeast || PasswordLength > passwordMost) {
      PasswordLength = prompt("Choose how long you want your password. You can pick between a minimum of " + (passwordLeast) + ' Or a maximum of ' + (passwordMost) + '.');
      if (PasswordLength > passwordMost) {
        alert("It is clearly stated in the before prompt that the maximum amount is " + (passwordMost) + ' charecters. This time, select somthing within this range PLEASE.')
        } else if (PasswordLength < passwordLeast) {
          alert("It is clearly stated in the before prompt that the minimum amount is " + (passwordLeast) + ' characters. This time, select something within this range PLEASE.')
      } 
    }
    return PasswordLength
  }
// WORKING CODE


  //  b. use numbers, lowercase, uppercase, or special characters options

  function gatherInfo () {
    var askSymbols = confirm("Select if you want to have symbols in your generated password");
    var askNumbers = confirm("Select if you want to have numbers in your generated password");
    var askLowercase = confirm("Select if you want to have lowercase letters in your generated password");
    var askUppercase = confirm("Select if you want to have uppercase letters in your generated password");
    var blank = "";

    // PROCESS OF GENERATING PASSWORD

    // ASKING FOR SYMBOLS IN PASSWORD

    if (askSymbols) {
      blank =+ symbols
      window.alert("Adding symbols to your generated password... This may take as long as it takes for you to click the button (this isn't a real loading screen)");
    }
    else {
        window.alert("Removing symbols...");
    }

    // ASKING FOR NUMBERS IN PASSWORD

    if (askNumbers) {
      blank =+ numbers
      window.alert("Adding numbers to your generated password... This may take as long as it takes for you to click the button (this isn't a real loading screen)");
    }
    else {
       window.alert("Removing numbers...");
    }

    // ASKING FOR LOWERCASE LETTERS IN PASSWORD

   if (askLowercase) {
     blank =+ lowerCase
     window.alert("Adding lowercase letters to your generated password... This may take as long as it takes for you to click the button (this isn't a real loading screen)");
    }
    else {
        window.alert("Removing lowercase letters...");
    }

    // ASKING FOR UPPERCASE LETTERS IN PASSWORD

   if (askUppercase) {
     blank =+ upperCase
     window.alert("Adding uppercase letters to your generated password... This may take as long as it takes for you to click the button (this isn't a real loading screen)");
   }
   else {
     window.alert("Removing uppercase letters...");
   }

   if (!askSymbols && !askNumbers && !askLowercase && !askUppercase) {
      alert("You are trying to generate a password, so why did you hit no for all of the questions? Let's try this again...");
      return gatherInfo ();
   }
   else if (askSymbols && askNumbers && askLowercase && askUppercase) {
      window.alert("Wow, All variables were selected! I will generate a password much like you... EXTRA")
   }
   generatePassword();
  }

  // 2. validate the input.



  // 3. generate password
  function generatePassword() {

    const PasswordLength;
    const password = "";
    const gatherInfoResults = "";


// Variables calling functions
 PasswordLength = getPasswordLength ();
 gatherInfoResults = gatherInfo ();
  

  // 4. display password back to user.
  return password
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





  
