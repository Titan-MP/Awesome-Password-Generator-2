// Assignment code here

function generatePassword() {
  var length = prompt('How long do you want your password to be?');
  var lenghtCon = Number(length);
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=",
      retVal = "";
  for (var i = 0, n = charset.length; i < lenghtCon; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n)); 
  }
  return retVal;
} 

var textArea = document.querySelector("#textarea");
function rightPassword() {
  textArea.value = generatePassword();
}

var button = document.querySelector("#password");

button.addEventListener("click", rightPassword);

