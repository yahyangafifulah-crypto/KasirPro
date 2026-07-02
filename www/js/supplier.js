let supplier = JSON.parse(localStorage.getItem("supplier")) || [];

function simpanSupplier() {
    localStorage.setItem("supplier", JSON.stringify(supplier));
}

function tampilSupplier() {

    let list = document.getElementById("listSupplier");

    list.innerHTML = "";

    supplier.forEach(function(item,index){

        list.innerHTML += `
        <li>

        <b>${item.nama}</b><br>

        HP : ${item.hp}<br>

        Alamat : ${item.alamat}<br><br>

        <button onclick="hapusSupplier(${index})">

        Hapus

        </button>

        </li>
        `;

    });

}

function tambahSupplier(){

    supplier.push({

        nama:document.getElementById("nama").value,

        hp:document.getElementById("hp").value,

        alamat:document.getElementById("alamat").value

    });

    simpanSupplier();

    tampilSupplier();

    document.getElementById("nama").value="";

    document.getElementById("hp").value="";

    document.getElementById("alamat").value="";

}

function hapusSupplier(index){

    supplier.splice(index,1);

    simpanSupplier();

    tampilSupplier();

}

tampilSupplier();
