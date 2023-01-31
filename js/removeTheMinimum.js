exampleArrayOfNumbers = [5,3,2,1,4]

function removeSmallest(numbers) {
    let smallestNumber = Math.min(...numbers)
    for (i = 0; i < numbers.length; i++){
        if (numbers[i] == smallestNumber){
            numbers.splice(numbers[i])
        }
    }
    return numbers;
  }

console.log(removeSmallest(exampleArrayOfNumbers));