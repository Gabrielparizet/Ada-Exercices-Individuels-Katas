function likes(names) {

    let likeSentence = "";

        if (names.length == 0){
            likeSentence = "no one likes this";
        } else if (names.length == 1){
            likeSentence = names[0] + " likes this";
        } else if (names.length == 2){
            likeSentence = names[0] + " and " + names[1] + " like this"
        } else if (names.length == 3){
            likeSentence = names[0] + ", " + names[1] + " and " + names[2] + " like this"
        } else if (names.length > 3){
            likeSentence = names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this"
        }
    return likeSentence;
  }

console.log(likes(["Alex", "Jacob", "Mark", "Max", "Edouard"]))



// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"