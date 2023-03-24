/* Target:
1. Klo cs2 rilis pingin main
2. Pingin competitive aja
*/

// fungsi untuk mengecek apakah CS2 sudah rilis atau belum
function checkCS2Release(callback) {
    setTimeout(() => {
      const isCS2Released = false; // asumsi CS2 sekarang belum rilis (klo misal ganti true ya nanti bakal le siap jadi competitive player)
      callback(isCS2Released);
    }, 2000); // setelah 2 detik, jalankan callback
  }
  
  // fungsi untuk mempersiapkan diri menjadi competitive player
  function prepareForCompetition(callback) {
    setTimeout(() => {
      const isPrepared = true; // asumsi sudah mempersiapkan diri
      callback(isPrepared);
    }, 4000); // setelah 2 detik, jalankan callback
  }
  
  // panggil fungsi checkCS2Release dengan callback function
  checkCS2Release((isCS2Released) => {
    if (isCS2Released) {
      console.log("CS2 sudah rilis! Yuk main!");
      // panggil fungsi prepareForCompetition dengan callback function
      prepareForCompetition((isPrepared) => {
        if (isPrepared) {
          console.log("Sudah siap jadi competitive player!");
        }
      });
    } else {
      console.log("Belum rilis CS2, sabar ya!");
      prepareForCompetition((isPrepared) => {
        if (isPrepared) {
          console.log("Push rank di CS:GO dulu yuk");
        }
      });
    }
  });
  