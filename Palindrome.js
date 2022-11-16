// ETAPE 1

let randomDate = "10/02/2001";

function maxDaysinMonth(date) {
  let day = parseInt(date[0] + date[1]);
  let month = parseInt(date[3] + date[4]);
  if (month == 4 || month == 6 || month == 9 || month == 11 && day > 30) {
    return false;
  } else if (month == 2 && day > 28) {
    return false;
  } else {
    return true;
  }
}

function isValidDate(date) {
  let valid = false;
  let day = parseInt(date[0] + date[1]);
  let month = parseInt(date[3] + date[4]);
  let year = parseInt(date[6] + date[7] + date[8] + date[9]);
  if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 999 && year <= 9999 && maxDaysinMonth(date) == true){
    valid = true;
  }
  return valid;
}
//console.log(isValidDate(randomDate));

//ETAPE 2
function isPalindrome(date){
let validPalindrome = false;
if(
    parseInt(date[0]) == parseInt(date[9]) &&
    parseInt(date[1]) == parseInt(date[8]) &&
    parseInt(date[3]) == parseInt(date[7]) &&
    parseInt(date[4]) == parseInt(date[6]) &&
    isValidDate(date) == true
){
    validPalindrome = true;
}
return validPalindrome;
}
console.log(isPalindrome(randomDate));

// ETAPE 3

