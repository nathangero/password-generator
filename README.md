# Password Generator

## Description

The purpose of this repo is to implement a password generator based on either lowercase, uppercase, numeric, or special characters. When the user selects all their criteria the password is then shown in the text box above the "Generate Password" button.

A password must have at least this criteria:

* Between 8-128 characaters.
* Pick at least **1** of the following: lowercase, uppercase, numeric, or special characters.

You can view the site here: [https://nathangero.github.io/password-generator/](https://nathangero.github.io/password-generator/)

## Usage

1. Click on the "Generate Password" button
2. Enter a number between 8-128.
3. When prompted, click/tap "Ok" to include a specific criteria or click/tap "Cancel" to exclude it.
4. User will be prompted with their preferences at the end.
5. The site will then show the generated password in the text box.

### Why use only confirm?

I decided to help minimize human error by avoiding having the user type out words like "lowercase" or "l" to add lowercase characters in teh criteria. I think by prompting with a type of "yes/no", it helps the user make an easier and quicker choice.

## Learning Points

* I didn't know about the different alert dialogue boxes like ```prompt()``` and ```confirm()```, and how useful they are at guiding the user.
    * Using the results of ```confirm()``` is useful if the code should continue one path or another.
* It's not possible to customize the default alert dialogue boxes. I would have to make my own from scratch in html and css.
    * This is why I used "Ok" and "Cancel" as a substitute for "Yes" and "No".
* I learned that ```prompt()``` values don't work very well with ```switch``` cases. I had tried that under the function ```getCriteriaStrings()```, but only the default switch statement would execute. When I switched to ```if()``` statements it worked perfectly!
* Using ```Math.random()``` isn't as random as I was hoping. I noticed when I had all 4 password criteria selected, the password would usually contain a bunch of lowercase or uppercase characters. There weren't a lot of numbers or special characters.
    * To accommodate for this, I decided to shuffle the order of which criteria would be in order. The code can be seen [here](#shuffling-criteria-order)

## Code Snippets

### Shuffling Criteria Order

The purpose of this was to help create some randomness in the password generation. I wasn't sure how to increase the randomness of ```Math.random()``` when [generating the password](#generating-the-password) from the user's preferences, so I opted for this way.
```js
function shuffleCriteria(passwordCriteria) {
  var passwordCriteriaLength = Object.keys(passwordCriteria).length;
  var criteriaKeys = Object.keys(passwordCriteria);

  for (var i = 0; i < passwordCriteriaLength; i++) {
    var indexToUse = Math.floor(Math.random() * passwordCriteriaLength);
    var indexToReplace = Math.floor(Math.random() * passwordCriteriaLength);
    
    var temp = criteriaKeys[indexToReplace];
    criteriaKeys[indexToReplace] = criteriaKeys[indexToUse];
    criteriaKeys[indexToUse] = temp;
  }

  return criteriaKeys;
}
```

### Generating the Password

Algorithm for picking characters from the user's chosen criteria.
```js
for (var i = 0; i < passwordLength; i++) {
  // Get a random index from the criteria chosen
  var randomIndex = Math.floor(Math.random() * combinedCriteria.length);

  // Get a char from the corresponding index
  var randomChar = combinedCriteria.charAt(randomIndex);
  password += randomChar;
}
```

## Credits

### Coding Links

[Browser Prompts](https://www.w3schools.com/jsref/met_win_prompt.asp)

[Idea to use set strings for randomization](https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/)

[Getting a random char in a string](https://www.tutorialspoint.com/generate-random-string-characters-in-javascript)

## Other Resources

[Special Characters List](https://owasp.org/www-community/password-special-characters)