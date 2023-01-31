const tryWord = (word, base) => {

	if (word === base) {
		return true
  } else {
  	let wellPlaced = [];
    let notInWord = [];
    let missPlaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');

    
		for (let i = 0; i < arrayWord.length; i++) {
    	    if (arrayBase[i] === arrayWord[i]) {
      	      wellPlaced.push(arrayWord[i]);
          } else if (arrayBase.includes(arrayWord[i])){
              missPlaced.push(arrayWord[i])
          } else {
              notInWord.push(arrayWord[i]);
            }
            console.log("index: ", i, "\n", "wellPlaced: ", wellPlaced, "\n", "missPlaced :", missPlaced, "\n","notIntWord: ",notInWord)
    }

    //console.log("wellplaced: ", wellPlaced, "\n", "missPlaced :", missPlaced, "\n","notIntWord: ",notInWord)
    return { wellPlaced: wellPlaced, missPlaced: missPlaced, notInWord: notInWord }
  }
}
tryWord("décoration", "ocultation")

// let base = 'dictionnaire';

// function displayRules(string){
//     firstLetter = string[0];
//     numberOfLetters = string.length;
//     document.getElementById("rules").innerText = "Première lettre: " + firstLetter + "\n" + "Nombre de lettre: " + numberOfLetters
// }

// displayRules(base);

// function guess() {
// 	let word = document.getElementById("word").value
//     let lowerCaseWord = word.toLowerCase()
// 	let result = tryWord(lowerCaseWord, base)
//     if (result == true){
//         document.getElementById("win").innerText = 'Vous avez gagné'
//     } else {
//         document.getElementById("word").value = ''
//         document.getElementById("try").innerText = word
//      document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(', ')
//      document.getElementById("miss").innerText = 'Mal placé: '+result.missPlaced.join(', ')
//      document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(', ')
//     }
// }

module.exports = {tryWord}

