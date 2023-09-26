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

  // Prompt user to see which criteria they want to have
  alert("You'll be prompted which criteria you want to add, click 'Ok' to include or 'Cancel' to exclude");
  passwordCriteria.lowercase = confirm("Include lowercase characters?");
  passwordCriteria.uppercase = confirm("Include uppercase characters?");
  passwordCriteria.numeric = confirm("Include numbers?");
  passwordCriteria.specialChars = confirm("Include special characters like '!' or '$' ?");

  console.log(passwordCriteria);

  return "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

