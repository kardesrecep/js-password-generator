/* choose elements */
const screenEl = document.querySelector("#screen-text");
const pwdLengthEl = document.getElementById("pwd-length");
const upperCaseEl = document.getElementById("upperCase");
const lowerCaseEl = document.getElementById("lowerCase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.querySelector(".generate");

/* upper-lower case number/symbol assign */
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#%^&-|]$[{?()_+=/}`;>,<'";



const getLowerCase = () => {
  return lowerCase[Math.floor(Math.random()*lowerCase.length)];
};


const getUpperCase = () => {
  return upperCase[Math.floor(Math.random() *upperCase.length)];
};
const getNumber = () => {
  return number[Math.floor(Math.random() * number.length)];
};
const getSymbol = () => {
  return symbol[Math.floor(Math.random() * symbol.length)];
};

const generatePassword = () => {
  const passwordLength = Number(pwdLengthEl.value);

  let password = "";

  if (upperCaseEl.checked) {
    password += getUpperCase();
  }
  if (lowerCaseEl.checked) {
    password += getLowerCase();
  }
  if (numberEl.checked) {
    password += getNumber();
  }
  if (symbolEl.checked) {
    password += getSymbol();
  }
  for (let i = password.length; i < passwordLength; i++) {
    password += generator();
  }
  screenEl.innerText = password;
};

const generator = () => {
  let keys = [];

  if (upperCaseEl.checked) {
    keys.push(getUpperCase());
  }
  if (lowerCaseEl.checked) {
    keys.push(getLowerCase());
  }
  if (numberEl.checked) {
    keys.push(getNumber());
  }
  if (symbolEl.checked) {
    keys.push(getSymbol());
  }
  if (keys.length == 0) return "";

  return keys[Math.floor(Math.random() * keys.length)];
};

generateEl.addEventListener("click", generatePassword);