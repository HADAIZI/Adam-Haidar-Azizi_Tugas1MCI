const { bagi, tambah, kurang } = require('./aritmatika');

const hasil = bagi(4000, 2);
const hasil2 = tambah(hasil, 25);
const hasil3 = kurang(hasil2, 2);

console.log(hasil3);
