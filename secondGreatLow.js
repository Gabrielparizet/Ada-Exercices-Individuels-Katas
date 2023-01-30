// SAMPLE ARRAY

let sampleArray = [7, 7, 12, 98, 106, 106];
let sampleArray2 = [7, 'abc', 98, 32, -5];


// This function checks whether if an array is only composed of integers. 
function checkInteger(array){
    for (i in array){
        if (isNaN(array[i])){
            array = 'ERROR';
        }
    }
    return array;
}   


// This function sorts an array of Integer in ascending order.

function sortArrayByAscendingOrder(array){
    array.sort(function(a, b){return a-b});
    return array;
}

// This function checks whether the smallest or biggest numbers in the array exist multiple times.
// If they do, it will return an array without these extremes.

function checkExtremes(array){
    let resultArray = [];
    for (i = 0; i < array.length; i++){
        if (array[0] == array[1]){
            array.shift(array[0]);
            array.shift(array[1]);
        } else if (array[array.length-1] == array[array.length-2]){
            array = array.shift(array[array.length-1]);
            array = array.shift(array[array.length-2]);
            console.log(array);
        }
    }
    return array;
}

checkExtremes(sampleArray);

function secondGreatLow(array){
    if (checkInteger(array) === 'ERROR'){
        return checkInteger(array);
    } else {
        sortArrayByAscendingOrder(array);
        checkExtremes(array);
        console.log(array);
    }


}


secondGreatLow(sampleArray);
// secondGreatLow(sampleArray2);