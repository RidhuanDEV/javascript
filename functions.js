// ===============================
// 1. Function Definition
// ===============================
// Definisi fungsi adalah cara mendeklarasikan blok kode yang dapat digunakan berulang kali.
// Fungsi membantu mengorganisir kode, menghindari duplikasi, dan membuat program lebih modular.

function greet() {
    console.log("Hello, World!");
}
// Output: Hello, World!
greet();


// ===============================
// 2. Function Parameters
// ===============================
// Parameter adalah variabel yang digunakan untuk menerima input pada fungsi.
// Dengan parameter, fungsi dapat bekerja dengan nilai yang berbeda-beda setiap kali dipanggil.

function add(a, b) {
    return a + b;
}
// Output: 5
console.log(add(2, 3));


// ===============================
// 3. Function Invocation
// ===============================
// Pemanggilan fungsi (invocation) adalah proses menjalankan kode di dalam fungsi.
// Fungsi dapat dipanggil berkali-kali dengan argumen berbeda untuk menghasilkan output yang berbeda.

function sayName(name) {
    console.log("My name is " + name);
}
// Output: My name is Alice
sayName("Alice");


// ===============================
// 4. Call, Apply, Bind
// ===============================
// Call, apply, dan bind adalah metode untuk mengatur konteks 'this' pada fungsi.
// - call: Memanggil fungsi dengan 'this' tertentu dan argumen terpisah.
// - apply: Mirip dengan call, tapi argumen dalam bentuk array.
// - bind: Mengembalikan fungsi baru dengan 'this' dan argumen yang sudah terikat.

function showDetails(city, country) {
    console.log(this.name + " lives in " + city + ", " + country);
}
const person = { name: "Bob" };
// Output: Bob lives in Jakarta, Indonesia
showDetails.call(person, "Jakarta", "Indonesia");

// --- Apply ---
showDetails.apply(person, ["Bandung", "Indonesia"]);
// Output: Bob lives in Bandung, Indonesia

// --- Bind ---
const showBobDetails = showDetails.bind(person, "Surabaya", "Indonesia");
showBobDetails();
// Output: Bob lives in Surabaya, Indonesia


// ===============================
// 5. Closures
// ===============================
// Closure adalah fungsi yang dapat mengakses variabel dari scope luar meskipun scope luar sudah selesai dieksekusi.
// Closure sering digunakan untuk membuat data private dan fungsi factory.

function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2


// ===============================
// 6. JS Async: Callback
// ===============================
// Callback adalah fungsi yang dikirim sebagai argumen ke fungsi lain dan dipanggil setelah proses asinkron selesai.
// Callback sering digunakan untuk menangani hasil operasi seperti pembacaan file atau permintaan jaringan.

function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded");
    }, 1000);
}
fetchData(function(result) {
    console.log(result); // Output (after 1s): Data loaded
});


// ===============================
// 7. JS Async: Asynchronous
// ===============================
// Kode asinkron memungkinkan program menjalankan operasi lain sambil menunggu proses tertentu selesai.
// Contohnya, setTimeout menjalankan fungsi setelah waktu tertentu tanpa menghentikan eksekusi kode lain.

console.log("Start");
setTimeout(() => {
    console.log("Async operation");
}, 500);
console.log("End");
// Output:
// Start
// End
// Async operation


// ===============================
// 8. JS Async: Promise
// ===============================
// Promise adalah objek yang merepresentasikan hasil operasi asinkron di masa depan.
// Promise memiliki tiga status: pending (menunggu), fulfilled (berhasil), dan rejected (gagal).
// Promise memudahkan penanganan operasi asinkron secara berantai.

function getNumber(shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Failed to get number");
            } else {
                resolve(42);
            }
        }, 1000);
    });
}
getNumber().then(num => {
    console.log(num); // Output (after 1s): 42
}).catch(err => {
    console.error("Error:", err);
});

// Contoh gagal
getNumber(true).then(num => {
    console.log(num);
}).catch(err => {
    console.error("Error:", err); // Output (after 1s): Error: Failed to get number
});


// ===============================
// 9. JS Async: Async/Await
// ===============================
// async/await adalah sintaks modern untuk menangani Promise agar kode asinkron terlihat seperti kode sinkron.
// async digunakan pada fungsi, dan await digunakan untuk menunggu Promise selesai sebelum melanjutkan eksekusi.

async function showNumber() {
    try {
        const num = await getNumber();
        console.log(num); // Output (after 1s): 42
    } catch (err) {
        console.error("Error:", err);
    }
}
showNumber();

// Contoh gagal dengan async/await
async function showNumberFailed() {
    try {
        const num = await getNumber(true);
        console.log(num);
    } catch (err) {
        console.error("Error:", err); // Output (after 1s): Error: Failed to get number
    }
}
showNumberFailed();