// STEP 1

const createDeck = () => {
    let orderedDeck = [
        "1♠︎",
        "2♠︎",
        "3♠︎",
        "4♠︎",
        "5♠︎",
        "6♠︎",
        "7♠︎",
        "8♠︎",
        "9♠︎",
        "10♠︎",
        "J♠︎",
        "Q♠︎",
        "K♠︎",
        "1♣︎",
        "2♣︎",
        "3♣︎",
        "4♣︎",
        "5♣︎",
        "6♣︎",
        "7♣︎",
        "8♣︎",
        "9♣︎",
        "10♣︎",
        "J♣︎",
        "Q♣︎",
        "K♣︎",
        "1♡",
        "2♡",
        "3♡",
        "4♡",
        "5♡",
        "6♡",
        "7♡",
        "8♡",
        "9♡",
        "10♡",
        "J♡",
        "Q♡",
        "K♡",
        "1♢",
        "2♢",
        "3♢",
        "4♢",
        "5♢",
        "6♢",
        "7♢",
        "8♢",
        "9♢",
        "10♢",
        "J♢",
        "Q♢",
        "K♢"
    ]
    let i = orderedDeck.length;
    while (--i > 0){
        let randIndex = Math.floor(Math.random() * (i + 1));
        [orderedDeck[randIndex], orderedDeck[i]] = [orderedDeck[i], orderedDeck[randIndex]];
    }
    return orderedDeck;
}

// STEP 2
const deck = createDeck();
console.log("starter deck: ",deck);

const deal = (number) => {
    let deltDeck = [];
    for (i = 0; i < number; i++){
        deltDeck.push(deck.shift())
    }
    return deltDeck;
}

const player1 = deal(2);
const player2 = deal(2);
console.log("player 1: ",player1);
console.log("player 2: ",player2);


// STEP 3

const flop = () => {
    let flop = [];
    let burntCards = [];
    let round;
    
    for (i in deck){
        if (i == 0){
            burntCards.push(deal(1).toString());
        } else if (i == 1 || i == 2 || i == 3){
            flop.push(deal(1).toString());
        } else if (i == 4){
            burntCards.push(deal(1).toString());
        } else if (i == 5){
            flop.push(deal(1).toString());
        } else if (i == 6){
            burntCards.push(deal(1).toString());
        } else if (i == 7){
            flop.push(deal(1).toString());
        }
    }
    console.log("burntCards: ", burntCards);
    console.log("flop: ", flop);     
}

flop()