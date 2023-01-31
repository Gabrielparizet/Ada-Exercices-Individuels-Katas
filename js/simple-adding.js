let num = 4
let arr = []
for (i = 0; i < num ; i++){
    arr.push(i);
}
for (i = 0; i < arr.length; i++){
    num += arr[i];
}
console.log(num);