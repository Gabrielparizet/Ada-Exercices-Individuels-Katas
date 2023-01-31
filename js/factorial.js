const factorial = (num) => {
    let result = 1;
    for (i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(8));