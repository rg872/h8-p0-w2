var nama = '';
var peran = '';

window.prompt('Selamat datang pengembara ke dunia Proxytia !');

while (nama == '') {
  var nama = window.prompt('Boleh kita tahu nama kamu ?', 'Masukan nama kamu');
}

window.prompt('Halo ' + nama + ' Sebelum memulai petualangan kamu, mari tentukan peranmu dulu');
window.prompt('Kamu bisa memilih antara Ksatria, Tabib atau Penyihir');
var peran = window.prompt('Kamu ingin berperan sebagai apa ?', 'Masukan peran kamu');

if (peran == 'Ksatria' || peran == 'ksatria') {
  window.prompt('Halo Ksatria ' + nama + ',kamu dapat menyerang dengan senjatamu!');
}else if (peran == 'Tabib' || peran == 'tabib') {
  window.prompt('Halo Tabib ' + nama + ',kamu akan membantu temanmu yang terluka.');
}else if (peran == 'Penyihir' || peran == 'penyihir') {
  window.prompt('Halo Penyihir ' + nama + ',ciptakan keajaiban yang membantu kemenanganmu!');
}else {
  window.prompt('Ehhh game-nya cuma nyediain 3 peran');
  window.prompt('Ya sudah, suka-suka kamu aja deh');
  window.prompt('Ehem');
}

window.prompt('Selamat! sekarang kamu sudah siap memulai petualangan kamu');
window.prompt('Tapi sayang game-nya belum selesai di develope');
window.prompt('Jadi main game lain aja ya, BYE !!!');
