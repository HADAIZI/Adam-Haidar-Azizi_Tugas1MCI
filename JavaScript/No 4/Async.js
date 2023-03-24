/*Target:
1. Beli RTX 4090 klo ada duit
*/

// Fungsi simulasi pembelian RTX 4090 dengan delay 2 detik
function buyRTX4090() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Pembelian berhasil jika stock tersedia
        const CheckBalance = true;
        if (CheckBalance) {
          resolve("Pembelian RTX 4090 berhasil dilakukan!");
        } else {
          reject("Duit dari mana klo cuma segini doang");
        }
      }, 2000);
    });
  }
  
  // Fungsi async untuk membeli RTX 4090
  async function purchaseRTX4090() {
    console.log("Memulai proses pembelian RTX 4090...");
    try {
      const result = await buyRTX4090();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  
  // Memanggil fungsi untuk membeli RTX 4090
  purchaseRTX4090();
  console.log("Tunggu yak!");
  