function xo(str) {
  var length = str.length;
  var i = 0;
  var xCount = 0;
  var oCount = 0;
  var respone;

  while (i < length) {
    if (str[i] === 'x') {
      xCount++;
    }else if (str[i] === 'o') {
      oCount++;
    }else {
      console.log('ERROR, neither X or O');
    }

    i++;
  }

  if (xCount === oCount) {
    respone = true;
  }else {
    respone = false;
  }

  return respone;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
