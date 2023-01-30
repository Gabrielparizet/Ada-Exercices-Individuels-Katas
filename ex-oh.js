function ex0h(str){
    let counter1 = 0;
    let counter2 = 0;
    for (i = 0; i < str.length; i++){
        if (str[i] == 'x'){
            counter1 += 1;
        }
        if (str[i] == 'o'){
            counter2 += 1;
        }
    }
    if (counter2 == counter1){
        return true;
    } else {
        return false;
    }
}
console.log(ex0h("x"))