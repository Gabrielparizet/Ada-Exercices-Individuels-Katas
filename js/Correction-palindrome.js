//ETAPE 1
function maxDaysInMonth(month){
    switch(month){
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;
        default:
            return 31;
    }
}

function isValidDate(date){
    //return false;
    //return true;
let format = date.split('/');

if (format[2].length != 4 && format[1].length != 2 && format[0].length != 2){
    return false;
    }
    let day = parseInt(format[0]);
    let month = parseInt(format[1]);
    let year = parseInt(format[2]);

    if(month < 1 || month > 12){
        return false;
    }

    if (day < 1 || day > maxDaysInMonth(month)){
        return false;
    }
return true;
}

const dates = [
    "03/04/2001",
    "03/14/2002",
    "10/02/2001"
];

dates.forEach(date => {
    console.log(`is ${date} valid ? ${isPalindrome(date)}`)
});

// ETAPE 2

function isPalindrome(string){
    let newStr = string.replaceAll("/", "");
    if (newStr == newStr.split("").reverse().join("")){
        return true;
    }
    return false;
}

