// Assignment Code
var charNumber = "";
var charSpecial = "";
var charCapital = "";
var pwLengthPerm = "";
var promptAnswer = ["y", "n"];
var numberSelected = false;
var capitalSelected = false;
var specialSelected = false;

var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArray = ["\"", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "<", ">", "?", "/", "\\", "[", "]", "{", "}", "|", ":", ":", ",", "."];
//Generate Array assignments: 0 = Numbers, 1 = Upper Case, 2 = Special Character, 3 = Lower Case
var generateArray = [0, 1, 2, 3];

var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");


function criteria () {

  charNumber = prompt("Would you like to include NUMBERS in your new ultra-secure password? Type in Y or N", "Y");
  console.log(promptAnswer.includes(charNumber))
  while (!promptAnswer.includes(charNumber.toLowerCase())) {
      alert("Please type in a 'Y' or an 'N' to continue");
      charNumber = prompt("Would you like to include NUMBERS in your new ultra-secure password? Type in Y or N", "Y");
      //console.log(charNumber.toLowerCase());
    }

  charSpecial = prompt("Would you like to include SPECIAL characters in your new ultra-secure password? Type in Y or N", "Y");
  console.log(promptAnswer.includes(charSpecial))
  while (!promptAnswer.includes(charSpecial.toLowerCase())) {
      alert("Please type in a 'Y' or an 'N' to continue");
      charSpecial = prompt("Would you like to include SPECIAL characters in your new ultra-secure password? Type in Y or N", "Y");
      //console.log(charSpecial.toLowerCase());
    }

  charCapital = prompt("Would you like to include CAPITAL letters in your new ultra-secure password? Type in Y or N", "Y");
  console.log(promptAnswer.includes(charCapital))
  while (!promptAnswer.includes(charCapital.toLowerCase())) {
      alert("Please type in a 'Y' or an 'N' to continue");
      charCapital = prompt("Would you like to include CAPITAL letters in your new ultra-secure password? Type in Y or N", "Y");
      //console.log(charCapital.toLowerCase());
    }

  var pwLength = prompt("Finally, how LONG would you like your password to be (How many characters)? Please type in a number greater than 7 and less than 129.", "10");
  console.log(pwLength);
  pwLengthPerm = parseInt(pwLength);
  console.log(pwLengthPerm);
  while (pwLengthPerm < 8 || pwLengthPerm > 128) {
    alert("That number is invalid.");
    pwLength = prompt("How LONG would you like your password to be (How many characters)? Please type in a number greater than 7 and less than 129.", "10");
    //console.log(pwLength);

    //Permanent Conversion of Password Length to an integer
    pwLengthPerm = parseInt(pwLength);
    //console.log(pwLengthPerm);
    }
}

function generatePossiblePassword() {
  var returnValue = "";
  numberSelected = false;
  capitalSelected = false;
  specialSelected = false;
    for (var i = 0; i < pwLengthPerm; i++) {
    var rdm = 0;
    rdm = Math.floor(Math.random() * Math.floor(4));
      if (rdm == 0 && charNumber.toLowerCase() == "y") {
        returnValue = returnValue + Math.floor(Math.random() * Math.floor(10));
        numberSelected = true;
      }
      else if (rdm == 1 && charCapital.toLowerCase() == "y") {
        returnValue = returnValue + upperArray[Math.floor(Math.random() * Math.floor(upperArray.length))];
        capitalSelected = true;
      }
      else if (rdm == 2 && charSpecial.toLowerCase() == "y") {
        returnValue = returnValue + specialArray[Math.floor(Math.random() * Math.floor(specialArray.length))];
        specialSelected = true;
      }
      else {
        returnValue = returnValue + lowerArray[Math.floor(Math.random() * Math.floor(lowerArray.length))];
      }
    }
    return returnValue;
}

function generatePassword() {
  var pass = false;
  var returnValue = "";
  while (pass == false) {
    returnValue = generatePossiblePassword();
    if ((numberSelected == false && charNumber.toLowerCase() == "y") || (capitalSelected == false && charCapital.toLowerCase() == "y") || (specialSelected == false && charSpecial.toLowerCase() == "y")) {
      pass = false;
    }
    else {
      pass = true;
    }
  }
  return returnValue;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

resetBtn.addEventListener("click", criteria);

criteria();
