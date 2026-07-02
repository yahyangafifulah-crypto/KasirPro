function tambahBarang() {

    let data = {
        kode: document.getElementById("kode").value,
        barcode: document.getElementById("barcode").value,
        nama: document.getElementById("nama").value,
        kategori: document.getElementById("kategori").value,
        satuan: document.getElementById("satuan").value,
        stok: document.getElementById("stok").value,
        hargaBeli: document.getElementById("hargaBeli").value,
        hargaJual: document.getElementById("hargaJual").value
    };

    simpanBarang(data, function () {

        alert("Barang berhasil disimpan");

        tampilBarang();

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
                </li>
                <hr>
            `;

        }

    });

}

document.addEventListener("deviceready", function () {
    tampilBarang();
});
