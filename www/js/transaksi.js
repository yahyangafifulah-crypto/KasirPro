let daftarBarang = JSON.parse(localStorage.getItem("barang")) || [];
let keranjang = [];
let total = 0;

function muatBarang() {
    const pilih = document.getElementById("pilihBarang");
    if (!pilih) return;
    pilih.innerHTML = "";

    daftarBarang.forEach((barang, index) => {
        // PERBAIKAN: Mengubah hargaJual menjadi harga_jual
        pilih.innerHTML += `
        <option value="${index}">
            ${barang.nama} - Rp ${barang.harga_jual}
        </option>
        `;
    });
}

function tambahKeranjang() {
    let index = document.getElementById("pilihBarang").value;
    let jumlah = parseInt(document.getElementById("jumlah").value);

    if (isNaN(jumlah) || jumlah <= 0) {
        alert("Masukkan jumlah yang benar");
        return;
    }

    if (jumlah > parseInt(daftarBarang[index].stok)) {
        alert("Stok tidak mencukupi");
        return;
    }

    // PERBAIKAN: Mengubah semua properti hargaJual menjadi harga_jual agar perhitungan math tidak NaN
    let item = {
        index: index,
        nama: daftarBarang[index].nama,
        harga: parseInt(daftarBarang[index].harga_jual),
        jumlah: jumlah,
        subtotal: parseInt(daftarBarang[index].harga_jual) * jumlah
    };

    keranjang.push(item);
    tampilKeranjang();
    document.getElementById("jumlah").value = "";
}

function tampilKeranjang() {
    let list = document.getElementById("keranjang");
    if (!list) return;
    list.innerHTML = "";
    total = 0;

    keranjang.forEach((item, index) => {
        total += item.subtotal;
        list.innerHTML += `
        <li>
            <b>${item.nama}</b><br>
            Harga : Rp ${item.harga}<br>
            Jumlah : ${item.jumlah}<br>
            Subtotal : Rp ${item.subtotal}<br><br>
            <button onclick="hapusItem(${index})">Hapus</button>
        </li>
        `;
    });

    document.getElementById("total").innerHTML = "Total : Rp " + total;
}

function hapusItem(index) {
    keranjang.splice(index, 1);
    tampilKeranjang();
}

function bayarTransaksi() {
    let bayar = parseInt(document.getElementById("bayar").value);

    if (isNaN(bayar)) {
        alert("Masukkan uang pembayaran.");
        return;
    }

    if (bayar < total) {
        alert("Uang pembayaran kurang.");
        return;
    }

    let kembali = bayar - total;
    document.getElementById("kembalian").innerHTML = "Kembalian : Rp " + kembali;

    keranjang.forEach(function(item){
        daftarBarang[item.index].stok = parseInt(daftarBarang[item.index].stok) - item.jumlah;
    });

    localStorage.setItem("barang", JSON.stringify(daftarBarang));

    let riwayat = JSON.parse(localStorage.getItem("transaksi")) || [];
    riwayat.push({
        tanggal: new Date().toLocaleString(),
        total: total,
        bayar: bayar,
        kembali: kembali,
        item: keranjang
    });

    localStorage.setItem("transaksi", JSON.stringify(riwayat));

    alert("Transaksi berhasil.");
    keranjang = [];
    tampilKeranjang();
    document.getElementById("bayar").value = "";
    document.getElementById("kembalian").innerHTML = "";
    muatBarang();
}

document.addEventListener("DOMContentLoaded", function(){
    muatBarang();
    tampilKeranjang();
});
