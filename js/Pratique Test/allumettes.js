// ETAPE 1

let totalMatches = 50;

const removeMatches = (matches) => {
    return totalMatches -= matches;
}


// ETAPE 2 & 3

// function askNumber(){
//     let numberPlayer = prompt("Entrez un chiffre entre un et six");
//     let oneToSix = parseInt(numberPlayer);
//     return oneToSix;
// }

// function game (){
// let matchesToRemove;
// do {
//     alert(totalMatches);
//     matchesToRemove = askNumber();
//     if (matchesToRemove < 1 || matchesToRemove > 6){
//         game();
//     } else {;
//     removeMatches(matchesToRemove);
//     console.log(totalMatches);
//     }
//     if (totalMatches == 0){
//         alert("Vous avez gagné");
//         console.log("Vous avez gagné")
//         } else if (totalMatches < 0){
//         alert("Vous ne pouvez pas enlever ce nombre d'allumettes");
//         totalMatches += matchesToRemove;
//         }
// } while (totalMatches > 0);
// }
// game()
// Il existe quelque chose pour refaire la boucle do while, à trouver.
// ETAPE 4

// function twoPlayers(){
//     for (i = 1; totalMatches < -1; i++){
//         console.log(i);
//     }
// }

// twoPlayers();

module.exports = {removeMatches}