const displayArray = (arr, option) => {
    let result = arr.join(option);
    console.log(result)
    return result;
}

displayArray(["Pomme", "Banane", "Abricot", "Cerise"], " ")