function kosong1() {
    let frm = document.getElementById("formulir");
    frm.harga.value = "";
}

function kosong2() {
    let frm = document.getElementById("formulir");
    frm.jumlah.value = "";
}

function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.harga.value = "";
    frm.jumlah.value = "";
    frm.valas.value = "";
    frm.hasil.value = "";
}

function totalHarga() {
    let frm = document.getElementById("formulir");
    let harga = frm.harga.value;
    let jumlah = frm.jumlah.value;
    let valas = frm.valas.value;
    //jika inputan salah
    if (isNaN(harga) || harga == '') {
        alert("Data Harga Salah/Kosong");
    } else if (isNaN(jumlah) || jumlah == '') {
        alert("Data Jumlah Salah/Kosong");
    } else {
        //jika inputan benar
        let total = harga * jumlah * valas; //perhitungan
        frm.hasil.value = total; //penempatan hasil di element form hasil
    }
}