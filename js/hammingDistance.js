function hamming(a,b) {
    let result = 0
	for (i in a){ 
        if (a[i] != b[i]){
            result += 1
        }
    }
    return result;
}

console.log(hamming('Hello', 'HelLo'));