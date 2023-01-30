// ETAPE 1

let randomDate = '10/02/2001';
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
// console.log(isPalindrome(randomDate));

// ETAPE 3


function getNextDays(n){
  let date = '17/11/2022';
  date.setDate(date+n);
  return date;
}
console.log(getNextDays(3));

/*function getNextPalindrome(x){
const todaysDate = '01/01/2022';
const todaysDate2 = todaysDate.split('/');
let result = [];

}


const getNextDays = (n) => {
  let date = new Date()
  date.setDate(date.getDate()+n)
  return date.toLocaleDateString('fr-FR')
}
console.log(getNextDays(1))


const getNextPalindromes = (x) => {
  let result = []
  for (let i = 0 ; result.length < x; i++){
      if ((isDatePalindrome(getNextDays(i)) == true) && (isValidDate(getNextDays(i)) == true)){
          result.push(getNextDays(i))
      }
      else {
          getNextDays(i + 1)
      }
  }
  return result
}*/
/*let day = todaysDate2[0];
let month = todaysDate[1];
let year = todaysDate[2];
while (result.length < x);{
  day += 1
  if (day == 31 && month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
    day = 1;
    month += 1;
    if (month == 12){
      month = 1;
      year += 1;
    }
  } else if (day == 30 && month == 4 || month == 6 || month == 9 || month == 11){
    day = 1;
    month += 1;
    if (month == 12){
      month = 1;
      year += 1;
    }
  } else if (day == 28 && month == 2){
    day = 1;
    month +=1;
    if (month == 12){
      month = 1;
      year += 1;
    }
  }
  result.push(day);
}
console.log(result);
}*/


//console.log(arrDate);
/*const getNextPalindromes = (x) => {
  console.log(x)
  const date = new Date()
  let date2 = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
  date2 = date2.split('/')
  date2 = date2.map(i=>Number(i))
  console.log(date2)
  let result = []
  while (result.length < x){
      date2[0] += 1
      if (date2[0] > 31) {
          date2[0] = 1
          date2[1] += 1
          if (date2[1] > 12){
              date2[1] = 1
              date2[2] += 1
          }
      }
      if ((isPalindrome(date2.toString().replace(',', '/').replace(',', '/')) === true) && (isValidDate(date2.toString().replace(',', '/').replace(',', '/')) === true)){
          result.push(date2.toString().replace(',', '/').replace(',', '/'))
      }
  }
  console.log(result)
  return result
}*/
//getNextPalindrome(3);
