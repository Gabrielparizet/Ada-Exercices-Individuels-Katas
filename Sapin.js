// // ETAPE 1

// let space = " ";
// let slash = "/";
// let star = '*';
// let backslash = "\\";
// let xMasTree = "";
// let backToLine = '\n';
// let spaceArray = [];
// let starArray = [];


// function createSpaces(number){

//     for(i = number; i >= 0; i--){
//         spaceArray.push(space.repeat(i));
//     }
//     return spaceArray;

// }

// function createStars(number){
    
//     for (i = 1; i <= number*2 + 1 ; i += 2 ){
//             starArray.push(star.repeat(i));
//     }
//     return starArray;

// }

// function sapin(number){
//     let treeTop = space.repeat(number + 1) + "+" + '\n';
//     createSpaces(number);
//     createStars(number);
//     let treeLine = "";

//     if (number == 0){
//         xMasTree = treeTop;

//     } else {
//         xMasTree += treeTop;

//         for (i = 0; i < number; i++){
//             treeLine = spaceArray[i] + slash + starArray[i] + backslash + backToLine;
//             xMasTree += treeLine;
//         }    
//     }

//     return xMasTree;
// }

// console.log(sapin(100))

//ETAPE 2

function sapin(number){
    let treeTop = space.repeat(number + 1) + "+" + '\n';
    createSpaces(number);
    createStars(number);
    let treeLine = "";
    let treeLine2 = "";
    let lineNumber = 1;

    if (number == 0){
        xMasTree = treeTop;
    
    } else {
        xMasTree += treeTop;

        for (i = 0; i < number ; i++){
            if (lineNumber % 3 == 0 && lineNumber !==3){
                treeLine = spaceArray[i] + slash + starArray[i] + backslash + backToLine;
                treeLine2 = spaceArray[i - 2] + slash + starArray[i - 2] + backslash + backToLine;
                xMasTree += treeLine2 + treeLine;
                lineNumber += 1;
            } else if (lineNumber == 3) {
                treeLine = spaceArray[i] + slash + starArray[i] + backslash + backToLine;
                xMasTree += treeLine + treeLine;
                lineNumber += 1;
            } else if (lineNumber == 7) {
                treeLine = spaceArray[i-3] + slash + starArray[i-3] + backslash + backToLine;
                xMasTree += treeLine;
                lineNumber += 1;
            } else {
                treeLine = spaceArray[i] + slash + starArray[i] + backslash + backToLine;
                xMasTree += treeLine;
                lineNumber += 1;
            } 
            
        }    
    
    }

    return xMasTree;
}

console.log(sapin(7))