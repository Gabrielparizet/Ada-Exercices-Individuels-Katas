const simpleAdding = (num) => {
    let total = 0;
    // Début de votre code
    let arr1 = []
    for (i = 0; i <= num; i++){
        arr1.push(i);
    }
    for (i = 0; i < arr1.length; i++){
        total += arr1[i];
    }
    // Fin de votre code
    return total;
  };
console.log(simpleAdding(100000));