function countLetters(str){

var numberOfLetters = {

}

var string = str.split(" ").join("");
console.log(string);

for (i = 0; i < string.length; i++ ){
  if(!numberOfLetters[string[i]]) {
    numberOfLetters[string[i]] = [i];
  } else {
    numberOfLetters[string[i]].push(i);
  }
}

return numberOfLetters
}


console.log(countLetters('lighthouse in the house'));
