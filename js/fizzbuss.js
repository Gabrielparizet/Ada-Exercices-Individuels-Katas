const fizzBuzz = (N) => {
    resultArray = [];
    for (i = 1; i <= N; i++){
        if (i % 3 == 0 && i % 5 == 0){
            resultArray.push("FizzBuzz");
        } else if (i % 3 == 0){
            resultArray.push("Fizz");
        } else if (i % 5 == 0){
            resultArray.push("Buzz");
        } else {
            resultArray.push(i);
        }
    }
    return resultArray;
}

console.log(fizzBuzz(100))