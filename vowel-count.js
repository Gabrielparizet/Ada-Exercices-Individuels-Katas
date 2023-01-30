let counter = 0;
const mot = "thereactor";
function vowelCount(str){
    for (i = 0; i < str.length; i++){
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "y"){
            counter += 1;
        }
    }
return counter
}
console.log(vowelCount(mot));