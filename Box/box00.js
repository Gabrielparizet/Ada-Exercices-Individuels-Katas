let o = "o";
let hyphen = "-";
let atLine = "\n";
let verticalLine = "|";
let space = " "
let line = ""; 

box = function (width, height){ // Ecriture de fonction permettant d'importer des fonctions lorsqu'on créé des tests avec import/ export.
    let str = "";

    for (i = 0; i < height; i ++){
        for (j = 0; j < width; j++){
            if (i == 0 || i == height-1){
                if (j == 0){
                    line = o;
                } else if (j == width - 1){
                    line += o;
                } else {
                    line += hyphen;
                }
            } else {
                if (j == 0){
                    line = verticalLine;
                } else if (j == width -1){
                    line += verticalLine;
                } else {
                    line += space;
                }
            }
        
        }
        str += line + atLine;
    }    
    return str;
}

console.log(box(4,4));