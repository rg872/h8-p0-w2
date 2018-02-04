// ##############################
// Soal 1
// ##############################

var index = 2;

console.log('LOOPING PERTAMA');
while (index <= 20) {
  console.log(index + ' - I love coding');
  index += 2;
}

if (index === 22) {
  console.log('LOOPING KEDUA');
  while (index >= 2) {
    console.log(index + ' - I will become fullstack developer');
    index -= 2;
  }
}

// ##############################
// Soal 2
// ##############################

var index = 2;

console.log('LOOPING PERTAMA');
for (var index = index; index <= 20; index++) {
  console.log(index + ' - I love coding');
}

index = 20;
console.log('LOOPING KEDUA');
for (var index = index; index >= 1; index--) {
  console.log(index + ' - I will become fullstack developer');
}

// ##############################
// Soal 3
// ##############################

for (var counter = 1; counter <= 100; counter++) {
  if ((counter % 2) === 0) {
    console.log(counter + ' adalah GENAP');
  }else {
    console.log(counter + ' adalah GANJIL');
  }
}

for (var counter = 1; counter <= 100; counter += 2) {
  if ((counter % 3) !== 0) {
    console.log(counter);
  }else {
    console.log(counter + ' adalah KELIPATAN 3');
  }
}

for (var counter = 1; counter <= 100; counter += 5) {
  if ((counter % 5) !== 0) {
    console.log(counter);
  }else {
    console.log(counter + ' adalah KELIPATAN 6');
  }
}

for (var counter = 1; counter <= 100; counter += 9) {
  if ((counter % 10) !== 0) {
    console.log(counter);
  }else {
    console.log(counter + ' adalah KELIPATAN 10');
  }
}
