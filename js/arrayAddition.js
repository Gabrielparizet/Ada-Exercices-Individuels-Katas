const arrayAddition = (arr) => {
    let sumArr = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] < Math.max(...arr)){
            sumArr += arr[i];
        } else {
            sumArr += 0;
        }
    }
    if (sumArr === Math.max(...arr)){
        return true;
    } else {

    }   return false;
}

console.log(arrayAddition([1, 2, 3, 12, 6])); 
