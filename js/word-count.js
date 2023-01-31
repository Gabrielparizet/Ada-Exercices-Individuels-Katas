const wordCount = (str) => {
    let counter = 0;
    let str2 = str.split(' ')
    console.log(str2);
    for (i=0; i < str2.length; i++){
        counter += 1;
    }
    return counter;
}

console.log(wordCount('Bonjour je suis Gabriel'));
