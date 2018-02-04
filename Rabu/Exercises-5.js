// ##############################
// Soal 1 - Let's Form a Sentence
// ##############################

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

for (var i = 0; i < 6; i++) {
  switch (i){
    case 0: word = word + ' ' + second; break;
    case 1: word = word + ' ' + third; break;
    case 2: word = word + ' ' + fourth; break;
    case 3: word = word + ' ' + fifth; break;
    case 4: word = word + ' ' + sixth; break;
    case 5: word = word + ' ' + seventh; break;
  }
}

// ################################
//Soal 2 - Index Accessing - 1 by 1
// ################################

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];

for (var i = 4; i < 14; i++) {
  if (i === 4) {
    secondWord = word[i];
  }else {
    secondWord = secondWord + word[i];
  }
}

for (var i = 15; i < 17; i++) {
  if (i === 15) {
    thirdWord = word[i];
  }else {
    thirdWord = thirdWord + word[i];
  }
}

for (var i = 18; i < 20; i++) {
  if (i === 18) {
    fourthWord = word[i];
  }else {
    fourthWord = fourthWord + word[i];
  }
}

for (var i = 21; i < 25; i++) {
  if (i === 21) {
    fifthWord = word[i];
  }else {
    fifthWord = fifthWord + word[i];
  }
}

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// #################################################
//Soal 3 - Breaking Sentence (Again) using Substring
// #################################################

var word3 = 'wow JavaScript is so cool';

//huruf pada index terakhir (index 3 di example) tidak di masukin ke dalam string
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14);
var thirdWord3 = word3.substring(15, 17);
var fourthWord3 = word3.substring(18, 20);
var fifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
