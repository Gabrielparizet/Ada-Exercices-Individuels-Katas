exampleString = '8 3 -5 42 -1 0 0 -9 4 7 4 -4'

function highAndLow(numbers){
    let arrayOfNumberInInteger = [];
    let arrayOfNumbersInString = numbers.split(' ');
    for (i = 0; i < arrayOfNumbersInString.length; i++){
        arrayOfNumberInInteger.push(parseInt(arrayOfNumbersInString[i]));
    }
    arrayOfNumberInInteger.sort(function(a,b){return a-b});
    let lowest = arrayOfNumberInInteger[0].toString();
    let highest = arrayOfNumberInInteger.slice(-1).toString();
    let result = highest + " " + lowest;
    return result;    
}

console.log(highAndLow(exampleString))

