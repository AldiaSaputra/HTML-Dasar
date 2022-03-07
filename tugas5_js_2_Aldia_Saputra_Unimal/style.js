function cetak() {
  //tangkap element2 form
  let frm = window.document.getElementById("formulir");
  let nm = frm.nama.value;
  let pr = frm.produk.value;
  let jm = frm.jumlah.value;
  let diskon, harga;

  //   //   let harga;
  switch (pr) {
    case "Tv":
      harga = 2000000;
      break;
    case "AC":
      harga = 3000000;
      break;
    case "Kulkas":
      harga = 40000000;
      break;
    default:
      "No Found...";
  }

  let hargaKotor = harga * jm;

  if (pr == "Kulkas" && jm >= 3) {
    diskon = hargaKotor * 0.3;
  } else if (pr == "AC" && jm >= 3) {
    diskon = hargaKotor * 0.2;
  } else {
    diskon = hargaKotor * 0.1;
  }

  let ppn = 0.1 * hargaKotor - diskon;

  let hargaBayar = hargaKotor - diskon + ppn;
  //cetak di alerting
  alert("Nama :" + nm + "\n Barang :" + pr + "\n Jumlah :" + jm + "\n Harga per Unit :" + harga + "\n Diskon :" + diskon + "\n PPN:" + ppn + "\n Total Bayar:" + hargaBayar);
}
