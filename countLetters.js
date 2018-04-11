function countLetters(str){

var numberOfLetters = {

}

var string = str.split(" ").join("");
console.log(string);

for (i = 0; i < string.length; i++ ){
  numberOfLetters[string[i]] = 0;
}

for (j = 0; j < string.length; j++ ){
numberOfLetters[string[j]] += 1;
}

return numberOfLetters
}


console.log(countLetters('lighthouse in the house'));
