var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//Arrays for password generator options
var specialCharacter = ["!", "#", "$", "%", "&", "'", "*", "+", ",", "-"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "U", "X", "Y", "Z"];


function generatePassword () {

    var pwLength = prompt("Please choose a password length between 8 and 128.");

    if (pwLength >= 8 && pwLength <= 128) {
      true;
    } else {
      alert("Choose a valid number")
      generatePassword()
    }

    var letterUP = confirm("Include lower case letters?");
    var letterLW = confirm("Include upper case letters?");
    var characterSpecial = confirm("Include special characters?");
    var numbers = confirm("Include numbers?");

  if (!letterUP && !letterLW && !characterSpecial && !numbers) {
    
    alert("Please select at minimum one character type!")
    generatePassword()
}


var chosenCharacters = [""];

if (letterUP){chosenCharacters.push(letterUP)}
if (letterLW){chosenCharacters.push(letterLW)}
if (specialC){chosenCharacters.push(specialC)}
if (numbers){chosenCharacters.push(numbers)}



}

 

function random(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]
}



generateBtn.addEventListener("click", writePassword);