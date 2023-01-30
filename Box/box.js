// ETAPE 1

// const generateString = num => {
//     let str = "";
//     let hyphen = "-";
//     str = hyphen.repeat(num)
//     return str;
//   };
  
//   console.log(generateString(1)); // Doit afficher `-`
//   console.log(generateString(2)); // Doit afficher `--`
//   console.log(generateString(4)); // Doit afficher `----`
//   console.log(generateString(19)); // Doit afficher `-------------------`

// ETAPE 2

// const generateString = num => {
//   let str = "";
//   let hyphen = "-";
//   let o = "o";
//   str = hyphen.repeat(num-1) + o;
//   return str;
// }

//   console.log(generateString(1)); // Doit afficher `-`
//   console.log(generateString(2)); // Doit afficher `--`
//   console.log(generateString(4)); // Doit afficher `----`
//   console.log(generateString(19)); // Doit afficher `-------------------`

// ETAPE 3

// console.log("o---o\n|   |\no---o");

// ETAPE 4

// const generateString = num => {
//   let str = "";
//   let hyphen = "-";
//   let o = "o";
//   let backToLine = "\n";
//   let line = o + hyphen.repeat(3) + o + backToLine;
//   str = line.repeat(num);
//   return str;
  
// }
// const height = 4;
// console.log(generateString(height));

// ETAPE 5

const generateString = (height, width) => {
  let str = "";
  let hyphen = "-";
  let backToLine = "\n"
  for (i = 0; i < height; i++){

    for (j = 0; j < width; j++){

      str = str + hyphen;

    }

    str = str + backToLine;  

  }

  return str;
};

const height = 3;
const width = 5;
console.log(generateString(height, width));

