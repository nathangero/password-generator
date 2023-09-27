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
    lowercase: "lowercase characters",
    uppercase: "uppercase characters",
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
    // Show the user the criteria they've chosen
    var selectedCriteria = Object.keys(passwordCriteria).filter((criteria) => {
      return passwordCriteria[criteria];
    })

    var criteriaString = "- " + passwordLength + " characters\n";
    for (var i = 0; i < selectedCriteria.length; i++) {
      criteriaString += "- " + criteriaNames[selectedCriteria[i]];

      if (i < selectedCriteria.length - 1) {
        criteriaString += "\n";
      }
    }

    alert("You've selected the following criteria: \n" + criteriaString);
  }

  return this.generatePasswordHelper(passwordLength, passwordCriteria)
}

// Helper function to generate the password based upon the user's criteria
function generatePasswordHelper(passwordLength, passwordCriteria) {
  var lowercase = "abcdefjhijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFJHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!@#$%^&*-_+,.?~"
  var combinedCriteria = "";

  var criteriaKeys = Object.keys(passwordCriteria)

  // Create the combinedCriteria string depending on the user's criteria
  for (var i = 0; i < Object.keys(passwordCriteria).length; i++) {
    switch (criteriaKeys[i]) {
      case "lowercase":
        if (passwordCriteria.lowercase) {
          combinedCriteria += lowercase;
        }
        break;

        
      case "uppercase":
        if (passwordCriteria.uppercase) {
          combinedCriteria += uppercase;
        }
        break;

        
      case "numeric":
        if (passwordCriteria.numeric) {
          combinedCriteria += numbers;
        }
        break;

        
      case "specialChars":
        if (passwordCriteria.specialChars) {
          combinedCriteria += specialChars;
        }
        break;
    }
  }
 
  var password = "";

  // Create the password
  for (var i = 0; i < passwordLength; i++) {
    // Get a random index from the criteria chosen
    var randomIndex = Math.floor(Math.random() * combinedCriteria.length);

    // Get a char from the corresponding index
    var randomChar = combinedCriteria.charAt(randomIndex);
    console.log("randomChar:", randomChar);
    password += randomChar;
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

