document.title = "JavaScript DOM Manipulation"; // mengganti judul halaman
document.body.style.backgroundColor = "#f0f0f0"; // mengubah warna latar belakang

const body = document.body;
body.append("Welcome to JavaScript DOM Manipulation"); // menambahkan elemen h1 ke body

const p1 = document.createElement("p"); // membuat elemen paragraf
p1.textContent = "This is a paragraph created using JavaScript."; // menambahkan teks ke paragraf
body.append(p1); // menambahkan paragraf ke body

const h2 = document.createElement("h2"); // membuat elemen h2
h2.textContent = "JavaScript DOM Example"; // menambahkan teks ke h2
body.append(h2); // menambahkan h2 ke body

const namasaya = document.createElement("h4"); // membuat elemen paragraf untuk nama
namasaya.innerHTML = "<marquee>Nama saya adalah John Doe.</marquee>"; // menambahkan teks ke paragraf nama
body.append(namasaya); // menambahkan paragraf nama ke body

const sekolahku = document.createElement("h4"); // membuat elemen paragraf untuk sekolah
sekolahku.innerText = "Saya bersekolah di SMK Negeri 1"; // menambahkan teks ke paragraf sekolah
body.append(sekolahku); // menambahkan paragraf sekolah ke body

document.body.style.fontFamily = "Arial, sans-serif"; // mengubah font body

const btn1 = document.getElementById("btn-1"); // mengambil elemen tombol dengan id btn-1
const btn2 = document.getElementById("btn-2"); // mengambil elemen tombol dengan id btn-2

btn1.style.border = "2px solid black"; // mengubah border tombol 1
btn1.style.backgroundColor = "#4CAF50"; // mengubah warna latar belakang tombol 1
btn1.style.color = "white"; // mengubah warna teks tombol 1
btn1.style.padding = "10px 20px"; // mengubah padding tombol 1
btn1.style.fontSize = "16px"; // mengubah ukuran font tombol 1
btn1.style.cursor = "pointer"; // mengubah kursor saat hover tombol 1

btn2.style.border = "2px solid black"; // mengubah border tombol 2
btn2.style.backgroundColor = "#f44336"; // mengubah warna latar belakang tombol 2
btn2.style.color = "white"; // mengubah warna teks tombol 2
btn2.style.padding = "10px 20px"; // mengubah padding tombol 2
btn2.style.fontSize = "16px"; // mengubah ukuran font tombol 2
btn2.style.cursor = "pointer"; // mengubah kursor saat hover tombol 2

btn1.addEventListener("click", function() { // menambahkan event listener untuk tombol 1
    klik(btn1.textContent); // memanggil fungsi klik dengan argumen 1
    ubahWarna(); // memanggil fungsi ubahWarna untuk mengubah warna latar belakang
    ubahtext(); // memanggil fungsi ubahtext untuk mengubah teks tombol 1
    tambahtext(); // memanggil fungsi tambahtext untuk menambahkan teks baru ke body
    if (btn1.textContent == "Tombol 1 telah diklik"){
    btn2.textContent = 'aduh gua ketinggalan cuy'
    }
});

document.querySelector('.btn-2').addEventListener("click", function() { // menambahkan event listener untuk tombol 2 menggunakan class
    klik(btn2.textContent); // menampilkan alert saat tombol 2 diklik
});

function klik(buttonberapa) { // mendefinisikan fungsi klik
    // alert("Tombol " + buttonberapa + " diklik!"); // menampilkan alert dengan nomor tombol
    alert(buttonberapa)
}

function ubahWarna() { // mendefinisikan fungsi ubahWarna
    btn1.style.backgroundColor = "#bbb"; // mengubah warna latar belakang body
}

function ubahtext(){
    btn1.textContent = "Tombol 1 telah diklik"; // mengubah teks tombol 1
}

function tambahtext() {
    const p2 = document.createElement("p"); // membuat elemen paragraf baru
    p2.textContent = "button nya sudah di klik bung !."; // menambahkan teks ke paragraf baru
    body.append(p2); // menambahkan paragraf baru ke body
}

function ubahText2(){
    if (btn2.textContent == 'aduh gua ketinggalan cuy'){
        btn2.textContent = 'too late brother !, try again next time!'
    }
}

function balikinText(){
    btn2.textContent = 'aduh gua ketinggalan cuy'
}