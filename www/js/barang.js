function tambahBarang() {
    // Menyamakan properti objek menggunakan snake_case agar sesuai dengan database
    let data = {
        kode: document.getElementById("kode").value,
        barcode: document.getElementById("barcode").value,
        nama: document.getElementById("nama").value,
        kategori: document.getElementById("kategori").value,
        satuan: document.getElementById("satuan").value,
        stok: document.getElementById("stok").value,
        harga_beli: document.getElementById("hargaBeli").value, // Diubah menjadi harga_beli
        harga_jual: document.getElementById("hargaJual").value  // Diubah menjadi harga_jual
    };

    // Validasi input wajib
    if (data.kode === "" || data.nama === "" || data.stok === "" || data.harga_jual === "") {
        alert("Lengkapi data barang terlebih dahulu!");
        return;
    }

    // Mengirimkan data yang sudah sinkron ke fungsi database
    simpanBarang(data, function () {
        alert("Barang berhasil disimpan");
        
        // Memperbarui list tampilan setelah data tersimpan
        tampilBarang();

        // Mereset form input kembali kosong
        document.getElementById("kode").value = "";
        document.getElementById("barcode").value = "";
        document.getElementById("nama").value = "";
        document.getElementById("kategori").value = "";
        document.getElementById("satuan").value = "";
        document.getElementById("stok").value = "";
        document.getElementById("hargaBeli").value = "";
        document.getElementById("hargaJual").value = "";
    });
}

function tampilBarang() {
    let list = document.getElementById("listBarang");
    if (!list) return;
    list.innerHTML = "";

    ambilBarang(function (rows) {
        for (let i = 0; i < rows.length; i++) {
            let b = rows.item(i);
            list.innerHTML += `
                <li>
                    <b>${b.nama}</b><br>
                    Kode: ${b.kode}<br>
                    Barcode: ${b.barcode}<br>
                    Kategori: ${b.kategori}<br>
                    Satuan: ${b.satuan}<br>
                    Stok: ${b.stok}<br>
                    Harga Beli: Rp ${b.harga_beli}<br>
                    Harga Jual: Rp ${b.harga_jual}<br>
                    <button onclick="hapusData(${b.id})">🗑️ Hapus</button>
                </li>
                <hr>
            `;
        }
    });
}

document.addEventListener("deviceready", function () {
    tampilBarang();
});
