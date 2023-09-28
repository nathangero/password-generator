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
    return "";

  } else if (isNaN(passwordLength)) {
    alert("Please enter a number.");
    return "";
  }

  // Prompt user to see which criteria they want to have
  alert("You'll be prompted which criteria you want to add, click 'Ok' to include or 'Cancel' to exclude");
  passwordCriteria.lowercase = confirm("Include lowercase characters?");
  passwordCriteria.uppercase = confirm("Include uppercase characters?");
  passwordCriteria.numeric = confirm("Include numbers?");
  passwordCriteria.specialChars = confirm("Include special characters like '!' or '$' ?");

  // Get all criteria that the user selected
  var checkCriteria = Object.values(passwordCriteria).filter((isSelected) => {
    return !isSelected
  })

  // Check if user has said "Cancel" to all criteria.
  if (checkCriteria.length === Object.keys(passwordCriteria).length) {
    alert("You must pick at least one password criteria. Please try again.");
    return "";

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
  // Shuffle the criteria around to try and get a more shuffled combinedCriteria string
  var criteriaKeys = this.shuffleCriteria(passwordCriteria);

  // Create the combinedCriteria string depending on the user's criteria
  var combinedCriteria = this.getCriteriaStrings(criteriaKeys, passwordCriteria);
 
  var password = "";

  // Create the password
  for (var i = 0; i < passwordLength; i++) {
    // Get a random index from the criteria chosen
    var randomIndex = Math.floor(Math.random() * combinedCriteria.length);

    // Get a char from the corresponding index
    var randomChar = combinedCriteria.charAt(randomIndex);
    // console.log("randomChar:", randomChar);
    password += randomChar;
  }

  return password;
}

// Shuffle the order of the criteria to create some randomness
function shuffleCriteria(passwordCriteria) {
  var passwordCriteriaLength = Object.keys(passwordCriteria).length;
  var criteriaKeys = Object.keys(passwordCriteria);
  // console.log("pre shuffle:", criteriaKeys);

  for (var i = 0; i < passwordCriteriaLength; i++) {
    var indexToUse = Math.floor(Math.random() * passwordCriteriaLength);
    var indexToReplace = Math.floor(Math.random() * passwordCriteriaLength);
    
    var temp = criteriaKeys[indexToReplace];
    criteriaKeys[indexToReplace] = criteriaKeys[indexToUse];
    criteriaKeys[indexToUse] = temp;
  }

  // console.log("post shuffle:", criteriaKeys);

  return criteriaKeys;
}

// Get strings needed to make the password
function getCriteriaStrings(criteriaKeys, passwordCriteria) {
  var lowercase = "abcdefjhijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFJHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var combinedCriteria = "";

  for (var i = 0; i < criteriaKeys.length; i++) {
    var criteriaName = criteriaKeys[i];

    // Concat the corresponding string depending on user's criteria choices
    if (passwordCriteria[criteriaName]) {
      if (criteriaName === "lowercase") {
        combinedCriteria += lowercase;

      } else if (criteriaName === "uppercase") {
        combinedCriteria += uppercase;

      } else if (criteriaName === "numeric") {
        combinedCriteria += numbers;

      } else if (criteriaName === "specialChars") {
        combinedCriteria += specialChars;

      } 
    }
  }

  return combinedCriteria;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

