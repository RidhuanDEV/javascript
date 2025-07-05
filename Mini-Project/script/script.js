const btnVideo = document.getElementById('btnVideo');
const trailer = document.getElementById('trailer');
const btnGame = document.getElementById('btnGame');



function PlayorPauseVideo() {
    // Toggle antara play dan pause video
    // Jika video sedang diputar, pause video dan ubah teks tombol menjadi "Play Video
    if (trailer.paused) {
        trailer.play()
        btnVideo.innerHTML = "Pause Video"
    } else {
        trailer.pause()
        btnVideo.innerHTML = "Play Video"
    }
}

function OpenRobloxGame() {
    // Buka halaman Roblox game
    window.location.href = "https://www.roblox.com/home";
}