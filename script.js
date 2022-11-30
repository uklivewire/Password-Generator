var passwordLength = [];
var choiceArr = [];

// Array of special characters to be included in password
var symbolsArr = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowercaseArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var uppercaseArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
// Write password to the #password input

function writePassword() {
  var correctPrompts = getPrompts(); //Will return true or false
  var passwordText = document.querySelector('#password');

  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
      passwordText.value = "";
  }
}

// Function to generate password with user input
function generatePassword() {
  var password = "";
  for(var i = 0; i <passwordLength; i ++) {
    var randomCharacter = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomCharacter];
  }
  return password;
}

// Function to collect user input to be used with function generatePassword
function getPrompts(){
  choiceArr = [];

  passwordLength = parseInt(prompt("Choose a password length between 10 and 64 characters"));
  
  if(isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
    alert("Password length must be between 10 and 64 characters, please try again.");
    return false;
  }

  if (confirm("Include Symbols?")) {
    choiceArr = choiceArr.concat(symbolsArr);
  }

  if (confirm("Include Numbers?")) {
    choiceArr = choiceArr.concat(numbersArr);
  }

  if (confirm("Include Lowercase Letters?")) {
    choiceArr = choiceArr.concat(lowercaseArr);
  }

  if (confirm("Include Uppercase Letters?")) {
    choiceArr = choiceArr.concat(uppercaseArr);
  }
  return true;
}
