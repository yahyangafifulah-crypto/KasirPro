let laporan = JSON.parse(localStorage.getItem("transaksi")) || [];

function tampilLaporan(){

    let list = document.getElementById("listLaporan");

    let total = 0;

    list.innerHTML = "";

    laporan.forEach(function(item){

        total += item.total;

        list.innerHTML += `
        <li>

        <b>${item.tanggal}</b><br>

        Total : Rp ${item.total}<br>

        Bayar : Rp ${item.bayar}<br>

        Kembalian : Rp ${item.kembali}

        </li>
        `;

    });

    document.getElementById("jumlahTransaksi").innerHTML =
    "Jumlah Transaksi : " + laporan.length;

    document.getElementById("totalPendapatan").innerHTML =
    "Total Pendapatan : Rp " + total;

}

tampilLaporan();
