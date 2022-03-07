function cetak() {
    //tangkap element2 form
    let frm = window.document.getElementById("formulir");
    let nm = frm.nama.value;
    let nl = frm.nilai.value;
    //cek kelulusan
    let ket = (nl >= 60) ? "Lulus" : "Gagal";
    //cetak di alerting
    alert("Nama :" + nm + ", Nilai: " + nl + ", dinyatakan " + ket);
}