const {tryWord} = require("./motus")


// Je décrit ce que mes tests vont tester dans "describe."
describe ("Test de la fonction tryWord",() => {
    // Chaque it est un test. 
    it ("Ma fonction doit retournée true si le mot de l'utilisateur est le bon.", () => {
        // GIVEN
            const word = "bonjour";
            const base = "bonjour";
        // WHEN
            const test = tryWord(word, base);
        // THEN
            expect(test).toEqual(true);
    })
    it ("Le mot ecrit n'est pas le mot recherché--> doit retourner trois tableaux", () => {
        //GIVEN
        const word = "décoration"
        const base = "séparation"
        //WHEN 
        const test= tryWord(word,base)
        //THEN
        expect(test).toEqual({ wellPlaced: ["é","r","a","t","i","o","n"], missPlaced: [], notInWord: ["d","c","o"]})
    })
    it ("Le mot ecrit n'est pas le mot recherché--> doit retourner trois tableaux", () => {
        //Given
        const word = "séparation"
        const base = "décoration"
        //WHEN 
        const test= tryWord(word,base)
        //THEN
        expect(test).toEqual({ wellPlaced: ["é","r","a","t","i","o","n"], missPlaced: [], notInWord: ["s","p","a"]})
    })
})