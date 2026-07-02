let pelanggan = JSON.parse(localStorage.getItem("pelanggan")) || [];

function simpanPelanggan() {
    localStorage.setItem("pelanggan", JSON.stringify(pelanggan));
}

function tampilPelanggan() {

    let list = document.getElementById("listPelanggan");

    list.innerHTML = "";

    pelanggan.forEach(function(item, index){

        list.innerHTML += `
        <li>
            <b>${item.nama}</b><br>
            HP : ${item.hp}<br>
            Alamat : ${item.alamat}<br><br>

            <button onclick="hapusPelanggan(${index})">
            Hapus
            </button>

        </li>
        `;

    });

}

function tambahPelanggan(){

    pelanggan.push({

        nama:document.getElementById("nama").value,

        hp:document.getElementById("hp").value,

        alamat:document.getElementById("alamat").value

    });

    simpanPelanggan();

    tampilPelanggan();

    document.getElementById("nama").value="";

    document.getElementById("hp").value="";

    document.getElementById("alamat").value="";

}

function hapusPelanggan(index){

    pelanggan.splice(index,1);

    simpanPelanggan();

    tampilPelanggan();

}

tampilPelanggan();
