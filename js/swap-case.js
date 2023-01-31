const swapCase = (str) => {
    let arr1 = [];
    for (i = 0; i < str.length; i++){
        if (str[i] != str[i].toLowerCase()){
            arr1.push(str[i].toLowerCase());
        } else {
            arr1.push(str[i].toUpperCase());
        }
    }
    return arr1.join('').toString();
   
}
console.log(swapCase('La ville de Paris'));