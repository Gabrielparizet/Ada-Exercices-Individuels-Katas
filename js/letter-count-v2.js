const str = "le reacteur c'est super !";
let counter = 0;
// début de votre code
for (i = 0; i < str.length; i++){
    if (str[i] === 'e'){
        counter += 1;
    }
    if (str[i] === 'r'){
        counter += 1;
    }
}
// fin de votre code
console.log(counter);