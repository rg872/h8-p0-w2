var tanggal = 25;
var tanggalValid = false;
var bulan = 2;
var bulanValid = false;
var tahun = 1993;
var tahunValid = false;

console.log('Selamat datang ke program pemberitahu tanggal');

switch (true){
  case tanggal < 1 || tanggal > 31:
    console.log('Tanggal tidak valid');
    break;
  case (typeof tanggal) != 'number':
    console.log('Tanggal tidak valid');
    break;
  default :
    tanggalValid = true;
    break;
}

switch (true){
  case bulan < 1 || bulan > 12:
    console.log('Bulan tidak valid');
    break;
  case (typeof bulan) != 'number':
    console.log('Bulan tidak valid');
    break;
  default :
    bulanValid = true;
    break;
}

switch (true){
  case tahun < 1900:
    console.log('Error, Tidak dapat memproses tahun kurang dari 1900');
    break;
  case tahun > 2200:
    console.log('Error, Tidak dapat memproses tahun lebih dari 2200');
    break;
  case (typeof tahun) != 'number':
    console.log('Tahun tidak valid');
    break;
  default :
    tahunValid = true;
    break;
}

if (!(tanggalValid && bulanValid && tahunValid)) {
  console.log('Silahkan lakukan input ulang dengan benar');
}else {
  switch (true) {
    case bulan == 1:
      console.log('Tanggal yang kamu input adalah ' + tanggal + ' Januari ' + tahun + '.');
      break;
    case bulan == 2:
      console.log('Tanggal yang kamu input adalah ' + tanggal + ' Februari ' + tahun + '.');
      break;
    case bulan == 3:
      console.log('Tanggal yang kamu input adalah ' + tanggal + ' Maret ' + tahun + '.');
      break;
    case bulan == 4:
      console.log('Tanggal yang kamu input adalah ' + tanggal + ' April ' + tahun + '.');
      break;
    case bulan == 5:
      console.log('Tanggal yang kamu input adalah ' + tanggal + ' Mei ' + tahun + '.');
      break;
    case bulan == 6:
      console.log('Tanggal yang kamu input adalah ' + tanggal + ' Juni ' + tahun + '.');
      break;
    case bulan == 7:
      console.log('Tanggal yang kamu input adalah ' + tanggal + ' Juli ' + tahun + '.');
      break;
    case bulan == 8:
      console.log('Tanggal yang kamu input adalah ' + tanggal + ' Agustus ' + tahun + '.');
      break;
    case bulan == 9:
      console.log('Tanggal yang kamu input adalah ' + tanggal + ' September ' + tahun + '.');
      break;
    case bulan == 10:
      console.log('Tanggal yang kamu input adalah ' + tanggal + ' Oktober ' + tahun + '.');
      break;
    case bulan == 11:
      console.log('Tanggal yang kamu input adalah ' + tanggal + ' November ' + tahun + '.');
      break;
    case bulan == 12:
      console.log('Tanggal yang kamu input adalah ' + tanggal + 'Desember ' + tahun + '.');
      break;
  }
}
