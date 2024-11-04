import { API, sampleErrorData, sampleSuccessData } from './support.mjs';


function processData(data) {
  // Menggunakan Promise.all untuk menangani array of Promises dari API.fetch
  return Promise.all(
    data.map(item =>
      API.fetch(item.delay, item.simulateError).catch(error => {
        throw error; // Membangkitkan error jika API.fetch gagal
      })
    )
  );
}

// Menjalankan dan menguji kode dengan data contoh
processData(sampleErrorData)
  .then(console.log) // Seharusnya menampilkan error
  .catch(console.log); // Expected output: Error from delay 50

processData(sampleSuccessData)
  .then(console.log) // Expected output: ['Data from delay 100', 'Data from delay 50']
  .catch(console.log);
