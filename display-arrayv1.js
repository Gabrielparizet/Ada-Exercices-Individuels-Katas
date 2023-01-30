const displayArray = (arr) => {
    let result = arr.join(' ');
    console.log(typeof result);
    return result;
}

console.log(displayArray(['Salut', 'tu vas bien?', 'Oui et', 'toi?']));