// ETAPE 1

let totalMatches = 50;
let player1IsPlaying = true;
let playerName = "";

function removeMatches(matchesToRemove) {
    return totalMatches -= matchesToRemove;
}

// console.log(removeMatches(5));
// console.log(removeMatches(4));

// ETAPE 2

function askUserNumber(playerName){
    let number = parseInt(prompt(`${playerName}, please choose a number`)) ;
    //console.log(player1IsPlaying);

    return number;
}

function round(playerName){
    let numberUser = askUserNumber(playerName);
    if (numberUser >= 1 && numberUser <= 6){

        console.log(numberUser);
        removeMatches(numberUser);
    }
}

function game(){
    while (totalMatches > 0){
        if (player1IsPlaying == true){
            playerName = "Player 1";
            round(playerName);
            player1IsPlaying = false;
        } else if (player1IsPlaying == false){
            playerName = "Player 2";
            round(playerName);
            player1IsPlaying =true;
        }
        //console.log(totalMatches);
    }
    console.log("You won");
}

game();





