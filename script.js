// Assignment Code
var generateBtn = document.querySelector("#generate");

firstPrompt:
var charNumber = prompt("Would you like to include NUMBERS in your new ultra-secure password? Type in Y or N");
  if(charNumber.toLowerCase() != 'y' || charNumber.toLowerCase() != "n") {
    alert("Please type in a 'Y' or an 'N' to continue");
    continue firstPrompt;
  }



var charSpecial = prompt("Would you like to include SPECIAL characters in your new ultra-secure password? Type in Y or N");


var charCapital = prompt("Would you like to include CAPITAL letters in your new ultra-secure password? Type in Y or N");


var pwLength = prompt("Finally, how LONG would you like your password to be (How many characters)? Please type in a number greater than 7 and less than 129.");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
