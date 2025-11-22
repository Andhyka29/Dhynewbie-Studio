const form = document.getElementById('formData');
const inputJudul = document.getElementById('inputJudul');
const inputPengarang = document.getElementById('inputPengarang');
const inputPenerbit = document.getElementById('inputPenerbit');
const inputHarga = document.getElementById('inputHarga');
const btnSubmit = document.getElementById('btnSubmit');
const tabelBody = document.getElementById('tabelData');

// Local Storage
const STORAGE_KEY = 'dataBuku';
let editIndex = -1;

// ambil data di local storage lalu konversi ke array
function ambilData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

// simpan data lalu konversi kembali ke string
function simpanData(arr) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

function escapeHtml(s) {
  if (!s && s !== 0) return '';
  return String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;');
}

// merubah format angka ke rupiah
function formatRupiah(n) {
  const num = Number(n) || 0;
  return num.toLocaleString('id-ID');
}

// tampilkan data ke dalam tabel
function renderTable() {
  const data = ambilData();
  tabelBody.innerHTML = ''; 

  // jika belum ada datanya
  if (data.length === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="px-4 py-2" colspan="4"> Belum terisi datanya. </td>`;
    tabelBody.appendChild(tr);
    return;
  }

  data.forEach((item, idx) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td class="px-4 py-2">${escapeHtml(item.judul)}</td>
      <td class="px-4 py-2">${escapeHtml(item.pengarang)}</td>
      <td class="px-4 py-2">${escapeHtml(item.penerbit)}</td>
      <td class="px-4 py-2">Rp ${formatRupiah(item.harga)}</td>
      <td class="px-4 py-2">
        <button data-action="edit" data-index="${idx}" class="mr-2 px-2 py-1 bg-yellow-400 rounded">Edit</button>
        <button data-action="delete" data-index="${idx}" class="px-2 py-1 bg-red-500 text-white rounded">Hapus</button>
      </td>
    `;
    tabelBody.appendChild(tr);
  });
}

// reset form
function resetForm() {
  form.reset();
  editIndex = -1;
  btnSubmit.textContent = 'Submit';
}

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  // membaca input dari form
  const judul = inputJudul.value.trim();
  const pengarang = inputPengarang.value.trim();
  const penerbit = inputPenerbit.value.trim();
  const hargaRaw = inputHarga.value.trim();

  // memvalidasi input
  if (!judul) { alert('Isi dulu ya judul bukunya'); inputJudul.focus(); return; }
  if (!pengarang) { alert('Siapa sihh pengarangnya??'); inputPengarang.focus(); return; }
  const harga = hargaRaw === '' ? 0 : Number(hargaRaw);
  if (!Number.isFinite(harga) || harga < 0) { alert('Input harganya harus berupa angka dong'); inputHarga.focus(); return; }

  const data = ambilData();

  if (editIndex === -1) {
    // tambah data baru
    data.push({ judul, pengarang, penerbit, harga });
  } else {
    // update data yang sudah diedit
    if (editIndex >= 0 && editIndex < data.length) {
      data[editIndex] = { judul, pengarang, penerbit, harga };
    } else {
      alert('Indeks data tidak valid. Fitur edit dibatalkan.');
    }
  }

  // simpan dan refresh tabel
  simpanData(data);
  renderTable();
  resetForm();
});

// fitur hapus dan edit data
tabelBody.addEventListener('click', function(e) {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;

  const action = btn.dataset.action;
  const idx = Number(btn.dataset.index);
  const data = ambilData();

  if (action === 'edit') {
    // isi form dengan data yang sudah dipilih
    if (idx < 0 || idx >= data.length) { alert('Data tidak ditemukan'); return; }
    const item = data[idx];
    inputJudul.value = item.judul;
    inputPengarang.value = item.pengarang;
    inputPenerbit.value = item.penerbit;
    inputHarga.value = item.harga;
    editIndex = idx;
    btnSubmit.textContent = 'Update';
    // fitur scroll jika user buka di HP
    inputJudul.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else if (action === 'delete') {
    if (!confirm('Yakin gak kalo data ini dihapus??')) return;
    if (idx < 0 || idx >= data.length) { alert('Data tidak ditemukan'); return; }
    data.splice(idx, 1);
    simpanData(data);
    renderTable();
    if (editIndex === idx) resetForm();
  }
});

renderTable();
