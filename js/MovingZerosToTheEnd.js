const moveZeros = (arr) => {
    let zerosArr = [];
    for (i in arr){
        if (arr[i] < 1 && arr[i] > -1){
            zerosArr.push(arr[i]);
            arr.splice(i, 1);
        }
    }
    for (i in zerosArr){
        arr.push(zerosArr[i]);
    }
    return arr;
}

sampleArr = [false,1,0,1,2,0,1,3,"a"];

console.log(moveZeros(sampleArr));
