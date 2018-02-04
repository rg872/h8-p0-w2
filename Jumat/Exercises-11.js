function balikKata(kata) {
  var length = kata.length;
  var i = length - 1;
  var string = '';

  while (i >= 0) {
    string = string + kata[i];
    i--;
  }

  return string;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
