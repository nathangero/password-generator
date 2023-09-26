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

  var criteriaNames = {
    lowercase: "lowercased characters",
    uppercase: "uppercased characters",
    numeric: "numbers",
    specialChars: "special characters"
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

  var checkCriteria = Object.values(passwordCriteria).filter((isSelected) => {
    return !isSelected
  })

  // Check if user has said "Cancel" to all criteria.
  if (checkCriteria.length === Object.keys(passwordCriteria).length) {
    alert("You must pick at least one password criteria. Please try again.");
  } else {
    var selectedCriteria = Object.keys(passwordCriteria).filter((criteria) => {
      return passwordCriteria[criteria];
    })

    var criteriaString = "";
    for (var i = 0; i < selectedCriteria.length; i++) {
      criteriaString += "- " + criteriaNames[selectedCriteria[i]];

      if (i < selectedCriteria.length - 1) {
        criteriaString += "\n";
      }
    }

    alert("You've selected the following criteria: \n" + criteriaString);
  }

  return "";
}

function generatePasswordHelper(passwordCriteria) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

