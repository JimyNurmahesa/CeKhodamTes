// Add JS here

// Add JS here

// Array data khodam
const dataKhodam = [
    'Tikus Curut',
    'Kadal Buntung',
    'Landak Gila',
    'Kelelawar Albino',
    'Kucing Tanah',
    'Cicak Gagap',
    'Kupu-kupu Pintar',
    'Anjing Terbang',
    'Kura-kura Tercepat',
    'Burung Tikus',
    'Ular Merajalela',
    'Belalang Terbang',
    'Kuda Liar',
    'Babi Tidur',
    'Ayam Mutan',
    'Kelinci Lompat',
    'Badak Kerdil',
    'Paus Terbang',
    'Singa Botak',
    'Gajah Kurus',
    'Pinguin Berkaki Enam',
    'Ikan Lohan',
    'Landak Botak',
    'Anjing Laut',
    'Katak Berbulu',
    'kadal buntung',
    'kijang',
    'bekicot',
  ];
  
  // Ambil elemen form dan hasilCek dari DOM
  const cekForm = document.getElementById('cekForm');
  const namaInput = document.getElementById('namaInput');
  const hasilCek = document.getElementById('hasilCek');
  const cekButton = document.getElementById('cekButton');
  const resetButton = document.getElementById('resetButton');
  
  // Event listener untuk tombol Cek
  cekForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Hindari pengiriman form default
  
    // Ambil nilai input nama
    const nama = namaInput.value.trim();
  
    if (nama !== '') {
      // Ambil data random dari array dataKhodam
      const randomIndex = Math.floor(Math.random() * dataKhodam.length);
      const khodam = dataKhodam[randomIndex];
  
      // Tampilkan hasil cek
      hasilCek.innerHTML = `<p>Khodam untuk <strong>${nama}</strong>: <strong>${khodam}</strong></p>`;
  
      // Kosongkan input nama
      namaInput.value = '';
    }
  });
  
  // Event listener untuk tombol Reset
  resetButton.addEventListener('click', function () {
    hasilCek.innerHTML = ''; // Kosongkan hasil cek
    namaInput.value = ''; // Kosongkan input nama
  });
  