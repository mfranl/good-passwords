//character sets to make chosenCharacters array
var letterLC = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var letterUC = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChars = ["@", "%", "+", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~"];


//randomizes the arrays to create unique combinations
var generateBtn = document.querySelector("#generate");
function randomArray(array) {
  var Index = Math.floor(Math.random() * array.length);
  return array[Index]
}
function generatePassword() {
  //choosing characters for password generator
  var passwordString = []
  var chosenCharacters = []
  //user types how long the password will be
  var characterQuantity = prompt("How many characters would you like your password to be? (between 8 and 128)")
  if (characterQuantity < 8 || characterQuantity > 128) {
    alert("Please choose a valid number")
    return generatePassword()
  }
  //boolean variables chosen by user
  var characterLC = confirm("Would you like your password to include lower case letters?");
  var characterUP = confirm("Would you like your password to include upper case letters");
  var characterN = confirm("Would you like your password to include numbers?");
  var characterSC = confirm("Would you like your password to include special characters?");
  if (!characterLC && !characterUP && !characterN && !characterSC) {
    alert("Please select at least one type of character.")
    return generatePassword()
  }
  // determining what characters will be chosen after user checks booleans
  if (characterLC) {
    chosenCharacters = chosenCharacters.concat(letterLC)
  }
  if (characterUP) {
    chosenCharacters = chosenCharacters.concat(letterUC)
  }
  if (characterN) {
    chosenCharacters = chosenCharacters.concat(numbers)
  }
  if (characterSC) {
    chosenCharacters = chosenCharacters.concat(specialChars)
  }
  while (passwordString.length < parseInt(characterQuantity) ) {
    passwordString.push(randomArray(chosenCharacters))
  }
  return passwordString.join("")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);