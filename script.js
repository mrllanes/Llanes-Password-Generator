// Assignment Code

//Defining initial variables to be used throughout the script
var charNumber = "";
var charSpecial = "";
var charCapital = "";
var pwLengthPerm = "";
var numberSelected = false;
var capitalSelected = false;
var specialSelected = false;

//Defining all arrays to be used in code **Did not create an array for numbers as the code for random number generator will be used instead**
var promptAnswer = ["y", "n"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArray = ["\"", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "<", ">", "?", "/", "\\", "[", "]", "{", "}", "|", ":", ":", ",", "."];
//The function "generatePossiblePassword" will come up with a random number (multiple times) from 0, 1, 2 and 3. Those numbers will in turn reference the above arrays as follows:
// 0 = Numbers, 1 = Upper Case (upperArray), 2 = Special Character (specialArray), 3 = Lower Case(lowerArray)


//Buttons that show on the HTML page
var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");


//Criteria function will be called at the end in order to have the code load (html and js) before seeing prompts
function criteria () {

  //Prompt user is they want to include numbers in the password, default answer set to Y
  charNumber = prompt("Would you like to include NUMBERS in your new ultra-secure password? Type in Y or N", "Y");
  //console.log(promptAnswer.includes(charNumber));
  while (!promptAnswer.includes(charNumber.toLowerCase())) {
      alert("Please type in a 'Y' or an 'N' to continue");
      charNumber = prompt("Would you like to include NUMBERS in your new ultra-secure password? Type in Y or N", "Y");
      //console.log(charNumber.toLowerCase());
    }

  //Prompt user if they want to include special characters in the password, default answer set to Y
  charSpecial = prompt("Would you like to include SPECIAL characters in your new ultra-secure password? Type in Y or N", "Y");
  //console.log(promptAnswer.includes(charSpecial));
  while (!promptAnswer.includes(charSpecial.toLowerCase())) {
      alert("Please type in a 'Y' or an 'N' to continue");
      charSpecial = prompt("Would you like to include SPECIAL characters in your new ultra-secure password? Type in Y or N", "Y");
      //console.log(charSpecial.toLowerCase());
    }

  //Prompt user if the want to include capital letters in the password, default answer set to Y
  charCapital = prompt("Would you like to include CAPITAL letters in your new ultra-secure password? Type in Y or N", "Y");
  //console.log(promptAnswer.includes(charCapital));
  while (!promptAnswer.includes(charCapital.toLowerCase())) {
      alert("Please type in a 'Y' or an 'N' to continue");
      charCapital = prompt("Would you like to include CAPITAL letters in your new ultra-secure password? Type in Y or N", "Y");
      //console.log(charCapital.toLowerCase());
    }

  //Prompt user for length of password, default answer set to 10
  var pwLength = prompt("Finally, how LONG would you like your password to be (How many characters)? Please type in a number greater than 7 and less than 129.", "10");
  //console.log(pwLength);
  pwLengthPerm = parseInt(pwLength);
  //console.log(pwLengthPerm);
  while (pwLengthPerm < 8 || pwLengthPerm > 128) {
    alert("That number is invalid.");
    pwLength = prompt("How LONG would you like your password to be (How many characters)? Please type in a number greater than 7 and less than 129.", "10");
    //console.log(pwLength);

    //Permanent Conversion of Password Length to an integer
    pwLengthPerm = parseInt(pwLength);
    //console.log(pwLengthPerm);
    }
}

//This function is to create a "possible" password, before it has been checked to see if it meets all the criteria. That will be done in the "generatePassword" function.
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

//This function takes the "possible" password created by the "generatePossiblePasword" function and checks it to make sure all the criteria selected by the user have been met.
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

// Added a reset button to reset the criteria and user can start from the beginning, otherwise clicking the "Generate Password" button again will create another password with the same criteria.
resetBtn.addEventListener("click", criteria);

// Calling the function here so the page loads up first, before all the prompts show, when I had this up top, the prompts were showing before the page loaded and it did not look good (in my opinion)
criteria();
