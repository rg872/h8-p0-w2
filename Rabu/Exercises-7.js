// ##############################
// Soal 1
// ##############################

var rows1 = 5;

for (var counter = 0; counter < rows1; counter++) {
  console.log('*');
}

// ##############################
// Soal 2
// ##############################

var rows2 = 5;

for (var counter = 0; counter < rows2; counter++) {
  var string = '';
  var counter2 = 0;
  while (counter2 < rows2) {
    string = string + '*';
    counter2++;
  }

  console.log(string);
}

// ##############################
// Soal 3
// ##############################

var rows3 = 5;

for (var counter = 0; counter < rows3; counter++) {
  var string = '';
  var counter2 = 0;
  while(counter2 < counter+1) {
    string = string + '*';
    counter2++;
  }

  console.log(string);
}
