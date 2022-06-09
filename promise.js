const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// Buatlah sebuah promise pada file promise.js dengan nama promiseOutput. promiseOutput akan menerima parameter emosi yang berisi 'marah' atau 'tidak marah'.
// Fungsi promiseOutput ini akan membaca data dari promiseTheaterIXX dan promiseTheaterVGC secara berurutan, kemudian menghitung jumlah 'marah' atau 'tidak marah' dari film yang ditonton oleh seseorang.
const promiseOutput = (emosi) => {
  const promiseTheaterIXXResult = promiseTheaterIXX();
  const promiseTheaterVGCResult = promiseTheaterVGC();

  return Promise.all([promiseTheaterIXXResult, promiseTheaterVGCResult]).then(
    (result) => {
      const data = [
        ...result[0],
        ...result[1],
      ];

      const count = data.filter(
        (film) => film.hasil === emosi
      ).length;

      return count;
    }
  );
};

module.exports = {
  promiseOutput,
};
