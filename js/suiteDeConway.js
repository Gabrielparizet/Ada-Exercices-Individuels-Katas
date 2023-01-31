let exampleString = "aa";
let exampleString2 = "abc";
let exampleString3 = "aabbcc"

function decoupeChain(string){
    let result = string.split(/[b]/);
    console.log(result);

    return result;
}

decoupeChain(exampleString);
decoupeChain(exampleString2);
decoupeChain(exampleString3);