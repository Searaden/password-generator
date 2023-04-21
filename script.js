// Assignment code here
function generatePassword() {
  var length = prompt("How long should your password be?", "8-128");

  while (isNaN(Number(length))) {
    alert("Not a number");
    length = prompt("How long should your password be?", "8-128");
  }

  var lengthParse = parseInt(length);

  while (lengthParse < 8 || lengthParse > 128){
    alert("Please enter a number between 8 and 128");
    length = prompt("How long should your password be?", "8-128");
    lengthParse = parseInt(length);
  }

  var lowerCase = prompt("Should your password include lowercase?" , "Yes or No");
  while(lowerCase.toLowerCase() != "yes" && lowerCase.toLowerCase() != "no") {
    alert("Please type yes or no");
    var lowerCase = prompt("Should your password include lowercase?" , "Yes or No");
  }

  var upperCase = prompt("Should your password include upper case?" , "Yes or No");
  while(upperCase.toLowerCase() != "yes" && upperCase.toLowerCase() != "no") {
    alert("Please type yes or no");
    var upperCase = prompt("Should your password include upper case?" , "Yes or No");
  }

  var numbersCase = prompt("Should your password include numbers??" , "Yes or No");
  while(numbersCase.toLowerCase() != "yes" && numbersCase.toLowerCase() != "no") {
    alert("Please type yes or no");
    var numbersCase = prompt("Should your password include numbers?" , "Yes or No");
  }

  var specialCase = prompt("Should your password include special characters?" , "Yes or No");
  while(specialCase.toLowerCase() != "yes" && specialCase.toLowerCase() != "no") {
    alert("Please type yes or no");
    var specialCase = prompt("Should your password include special characters?" , "Yes or No");
  }

  

    // Set variables to pull from based on choices

  var lowercaseCharacters = "";
  if (lowerCase.toLowerCase() === "yes") {
    lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  }
  
  var uppercaseCharacters = "";
  if (upperCase.toLowerCase() === "yes") {
    uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  var numberCharacters = "";
  if (numbersCase.toLowerCase() === "yes") {
    numberCharacters = "0123456789";
  }

  var specialCharacters = "";
  if (specialCase.toLowerCase() === "yes") {
    specialCharacters = "!@#$%^&*()_+-=[]{};:,.<>/?";
  }
  
  //Use incase none of the options is true
  if (lowercaseCharacters === "" && uppercaseCharacters === "" && numberCharacters === "" && specialCharacters === "") {
    alert("Please select at least one character set");
    return "";
  }
  //defines variables for the loop
  var characters = lowercaseCharacters + uppercaseCharacters + numberCharacters + specialCharacters;

  var password = "";

  hasLowercase = false;
  hasUppercase = false;
  hasNumber = false;
  hasSpecialChar = false;
  
//This loop makes sure all elements are met and continues to reginerate if it fails the check
  while (!(hasLowercase && hasUppercase && hasNumber && hasSpecialChar)) {

    for (var i = 0; i < lengthParse; i++) {
      var char = characters.charAt(Math.floor(Math.random() * characters.length));
      password += char;
  
      if (lowercaseCharacters.includes(char)) {
        hasLowercase = true;
      } else if (uppercaseCharacters.includes(char)) {
        hasUppercase = true;
      } else if (numberCharacters.includes(char)) {
        hasNumber = true;
      } else if (specialCharacters.includes(char)) {
        hasSpecialChar = true;
      }
  
      if (hasLowercase && hasUppercase && hasNumber && hasSpecialChar) {
        break;
      }
    }
  }
  return password;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
