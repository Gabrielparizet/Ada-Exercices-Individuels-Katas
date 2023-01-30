
// ROMAN NUMBERS / OBJECT OF ROMAN NUMERICAL CHARACTERS AND THEIR VALUE

    const romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M':1000
    }

// IRREGULAR NUMBERS / OBJECT OF IRREGULAR ROMAN NUMBERS AND THEIR VALUE

    const irregularNumbers = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CM': 900,
    }

// FUNCTION FIND IRREGULAR ROMAN NUMBERS / IF IRREGULAR NUMBERS IS FOUND RETURN IT IN AN ARRAY AS A RESULT

let arrayOfIrregularNumbers = [];
let toRemove = []

function findIrregularNumber (string){

    for (i in irregularNumbers){

        if (string.includes([i])){
            arrayOfIrregularNumbers.push(i);
            toRemove.push(i);
        }
    }
    return arrayOfIrregularNumbers;
}


    

// console.log(findIrregularNumber('CMXC'));

// FUNCTION / THIS FUNCTION TAKES A ROMAN NUMBER AS A STRING AND RETURNS IT IN NUMERICAL NUMBERS EXCEPT FOR IRREGULAR ROMAN NUMBERS

function solution(roman){
    const romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M':1000
    }
    const irregularNumbers = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }
    let arrayOfIrregularNumbers = [];
let toRemove = []

function findIrregularNumber (roman){

    for (i in irregularNumbers){

        if (roman.includes([i])){
            arrayOfIrregularNumbers.push(i);
            toRemove.push(i);
        }
    }
    return arrayOfIrregularNumbers;
}
    let result = 0;
    findIrregularNumber(roman);
    for (i in toRemove){
        roman = roman.replaceAll(toRemove[i], "")
    }
    let arrayOfRomanNumbers = roman.split('');
    for (i in arrayOfRomanNumbers){
        for (j in romanNumbers){
            if (arrayOfRomanNumbers[i] == j){
                result += romanNumbers[j];
            }
        }
    }
    for (i in arrayOfIrregularNumbers){
        for (j in irregularNumbers){
            if (arrayOfIrregularNumbers[i] == j){
                result += irregularNumbers[j];
            }
        }
    }
    
    return result;
}

console.log(solution('MCDLXV'))

