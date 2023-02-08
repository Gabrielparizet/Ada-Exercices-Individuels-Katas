a = "helleh"
function palindrome(str){
    let str2 = str.replace(/[^a-zA-Z0-9éèù]/g, '').toLowerCase(); // removes all characters between the [] and replaces them with whats between the '' symbols. 
    let longueur = str2.length;
    //console.log(str2)
    for (i = 0; i < longueur ; i++){
        //console.log('index ',i, 'valeur ',str2[i]);
        //console.log('index2 ',(str2.length-1) - i, 'valeur2 ',str2[(str2.length-1)-i])  
        if (str2[i] !== str2[longueur-1-i]){
            return false
        }
    }
    return true;
}
console.log(palindrome(a));