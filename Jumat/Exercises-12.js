function konversiMenit(menit) {
  var jam = Math.floor(menit / 60);
  var menitKonv = menit % 60;
  var result;

  if (menitKonv < 10) {
    result = jam + ':0' + menitKonv;
  }else {
    result = jam + ':' + menitKonv;
  }

  return result;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
