/* Target:
1. Skill Up
2. pingin lebih produktif
*/

// fungsi untuk mempelajari skill programming
function learnProgrammingSkill() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isLearned = true; // asumsi sudah mempelajari skill programming
        if (isLearned) {
          resolve("Skill programming berhasil dipelajari!");
        } else {
          reject("Skill programming gagal dipelajari!");
        }
      }, 3000); // setelah 3 detik, resolve atau reject promise
    });
  }
  
  // fungsi untuk memaksimalkan waktu produktif
  function maximizeProductivity() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Waktu produktif berhasil dimaksimalkan!");
      }, 2000); // setelah 2 detik, resolve promise
    });
  }
  
  // panggil fungsi learnProgrammingSkill dan maximizeProductivity dengan promise
  learnProgrammingSkill()
    .then((result) => {
      console.log(result);
      return maximizeProductivity();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  