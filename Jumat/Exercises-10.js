function bandingkanAngka(angka1, angka2) {
  var respone;
  if (angka2 === angka1) {
    respone = '-1';
  }else if (angka2 > angka1) {
    respone = true;
  }else {
    respone = false;
  }

  return respone;
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
