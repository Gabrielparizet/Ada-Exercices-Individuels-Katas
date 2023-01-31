const reverseString = (str) => {
    let reverse = [];
    let result = '';
    for (i = str.length - 1; i >= 0 ; i--){
        reverse.push(str.charAt(i));
    }
    for (i = 0; i < reverse.length; i++){
    result += reverse[i];
    }
    return result;
}

console.log(reverseString('sredoC dna dlroW olleH'));