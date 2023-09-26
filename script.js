// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordCriteria = {
    lowercase: false,
    uppercase: false,
    numeric: false,
    specialChars: false,
  }

  var passwordLength = prompt("How many characters do you want your password to have?");

  // Check if password length is long enough.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must between 8-128 characters. Please try again.");
  } else if (isNaN(passwordLength)) {
    alert("Please enter a number.");
  }

  return "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

