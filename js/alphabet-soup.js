const alphabetSoup = (str) => {
    let arr1 = [];
    let result = '';
    for (i = 0; i < str.length; i++){
        arr1.push(str[i]);
    }
    arr1.sort();
    for (i = 0; i < arr1.length; i++){
        result += arr1[i];
    }
    console.log(result);
}

alphabetSoup("thereactor");