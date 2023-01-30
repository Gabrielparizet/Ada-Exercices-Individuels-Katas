// Value for each color.
let blue = "blue";
let yellow = "yellow";
let red = "red";
let green = "green";


// This function checks that the proposition given by the player, only contains colors allowed in the game.
function colorsAllowed(array){
    let colorStatement = "";
    for (i in array){
        if (array[i] !== blue && array[i] !== yellow && array[i] !== red && array[i] !== green){
            // prompt(array[i] + " is not allowed. The only colors allowed are blue, yellow, red and green.");
            colorStatement += array[i] + " is not allowed. The only colors allowed in the game are blue, yellow, red and green. \n"
        }
    }
    return colorStatement;
}

// console.log(colorsAllowed(["yellow", "purple", "green", "black", "pink", "red"]))


// This function should return true or false if the good combinaison is found.

function isCombinationFound (array){
    for (i in array){
        if (array[i] == secretCombinaison[i]){
            return true;
        } else {
            return false;
        }
    }
}

// Imposed secret combinaison

let secretCombinaison = ["red", "green"]

console.log(isCombinationFound(["red", "yellow"]))
