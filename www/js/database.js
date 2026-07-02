var db = null;

document.addEventListener("deviceready", function () {

    db = window.sqlitePlugin.openDatabase({
        name: "kasir.db",
        location: "default"
    });

    db.transaction(function (tx) {

        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS barang(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                kode TEXT,
                barcode TEXT,
                nama TEXT,
                kategori TEXT,
                satuan TEXT,
                stok INTEGER,
                harga_beli INTEGER,
                harga_jual INTEGER
            )`
        );

    }, function(error){

        console.log(error);

    }, function(){

        console.log("Database siap.");

    });

}, false);

function simpanBarang(data, sukses){

    db.transaction(function(tx){

        tx.executeSql(
            "INSERT INTO barang(kode,barcode,nama,kategori,satuan,stok,harga_beli,harga_jual) VALUES(?,?,?,?,?,?,?,?)",
            [
                data.kode,
                data.barcode,
                data.nama,
                data.kategori,
                data.satuan,
                data.stok,
                data.hargaBeli,
                data.hargaJual
            ],
            function(tx,res){

                if(sukses) sukses(res);

            }
        );

    });

}

function ambilBarang(sukses){

    db.transaction(function(tx){

        tx.executeSql(
            "SELECT * FROM barang",
            [],
            function(tx,res){

                sukses(res.rows);

            }
        );

    });

}
