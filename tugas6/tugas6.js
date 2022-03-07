function clear1() {
  let nilai1 = document.getElementById("formulir");
  nilai1.a1.value = "";
}
function clear2() {
  let nilai2 = document.getElementById("formulir");
  nilai2.a2.value = "";
}
function kosong() {
  let kosong = document.getElementById("formulir");
  kosong.a1.value = "";
  kosong.a2.value = "";
  kosong.hasil.value = "";
}
function tambah() {
  let input = document.getElementById("formulir");
  let nilai1 = input.a1.value;
  let nilai2 = input.a2.value;
  if (isNaN(nilai1) || nilai1 == "") {
    alert("yang anda masukan di nilai 1 salah");
  } else if (isNaN(nilai2) || nilai2 == "") {
    alert("yang anda masukakn di nilai 2 salah");
  } else {
    let jumlah = Number(nilai1) + Number(nilai2);
    input.hasil.value = jumlah;
  }
}
function kurang() {
  let input = document.getElementById("formulir");
  let nilai1 = input.a1.value;
  let nilai2 = input.a2.value;
  if (isNaN(nilai1) || nilai1 == "") {
    alert("yang anda masukan di nilai 1 salah");
  } else if (isNaN(nilai2) || nilai2 == "") {
    alert("yang anda masukakn di nilai 2 salah");
  } else {
    let jumlah = nilai1 - nilai2;
    input.hasil.value = jumlah;
  }
}
function bagi() {
  let input = document.getElementById("formulir");
  let nilai1 = input.a1.value;
  let nilai2 = input.a2.value;
  if (isNaN(nilai1) || nilai1 == "") {
    alert("yang anda masukan di nilai 1 salah");
  } else if (isNaN(nilai2) || nilai2 == "") {
    alert("yang anda masukakn di nilai 2 salah");
  } else {
    let jumlah = nilai1 / nilai2;
    input.hasil.value = jumlah;
  }
}
function kali() {
  let input = document.getElementById("formulir");
  let nilai1 = input.a1.value;
  let nilai2 = input.a2.value;
  if (isNaN(nilai1) || nilai1 == "") {
    alert("yang anda masukan di nilai 1 salah");
  } else if (isNaN(nilai2) || nilai2 == "") {
    alert("yang anda masukakn di nilai 2 salah");
  } else {
    let jumlah = nilai1 * nilai2;
    input.hasil.value = jumlah;
  }
}
function kuadrat() {
  let input = document.getElementById("formulir");
  let nilai1 = input.a1.value;
  let nilai2 = input.a2.value;
  if (isNaN(nilai1) || nilai1 == "") {
    alert("yang anda masukan di nilai 1 salah");
  } else if (isNaN(nilai2) || nilai2 == "") {
    alert("yang anda masukakn di nilai 2 salah");
  } else {
    let jumlah = Math.pow(nilai1, nilai2);
    input.hasil.value = jumlah;
  }
}
