const readline = require("readline");

// membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// fungsi np_argwhere
function np_argwhere(arr) {
  const dimSizes = dim(arr); // menghitung ukuran array
  const result = [];

  // loop untuk mencari index array yang tidak bernilai 0
  for (let i = 0; i < dimSizes[0]; i++) {
    for (let j = 0; j < dimSizes[1]; j++) {
      for (let k = 0; k < dimSizes[2]; k++) {
        if (arr[i][j][k] !== 0) {
          result.push([i, j, k]);
        }
      }
    }
  }

  return result;
}

// fungsi untuk menghitung ukuran array
function dim(arr) {
  if (arr instanceof Array) {
    return [arr.length].concat(dim(arr[0]));
  } else {
    return [];
  }
}

// membaca input dari terminal
rl.question("Masukkan array (dalam format JSON): ", (input) => {
  const arr = JSON.parse(input);

  // menampilkan output
  const result = np_argwhere(arr);
  console.log(result);

  rl.close(); // menutup interface pembacaan input
});
