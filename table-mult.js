const tableMult = (num) => {
    let result = '';
    if (num < 0){
        result = 'Vous devez entrer un nombre positif.'
    } else if (isNaN(num)){
        result = 'Vous devez entrer un nombre.'
    } else if (num%1 != 0){
        result = 'Vous devez entrer un nombre entier.'
    } else {
        for (i =1; i < 11; i++){
            result += i + ' * ' + num + ' = ' + num*i + '\n';
        }
    }
    return result;
}

console.log('a: \n', tableMult(8));
console.log('b: \n', tableMult('abc'));
console.log('c: \n', tableMult(-1));
console.log('d: \n', tableMult(1.5));