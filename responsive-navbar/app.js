const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const dropdownButtons = document.querySelectorAll(".dropdown-btn");



// Fungsi untuk toggle sidebar
function toggleSideBar() {
  sidebar.classList.toggle("close");
  toggleBtn.classList.toggle("rotate");

  // Tutup semua submenu saat sidebar ditutup
  const openSubMenus = sidebar.querySelectorAll(".sub-menu.show");
  openSubMenus.forEach(sub => {
    sub.classList.remove("show");
    const trigger = sub.previousElementSibling;
    if (trigger) trigger.classList.remove("rotate");
  });
}

// Fungsi untuk toggle submenu
function toggleSubMenu(button) {

    // Tutup submenu lain jika ada yang terbuka
    closeOtherSubMenus(button);
  const subMenu = button.nextElementSibling;
  if (subMenu) {
    subMenu.classList.toggle("show");
    button.classList.toggle("rotate");

    // Buka sidebar kalau masih tertutup
    if (sidebar.classList.contains("close")) {
      sidebar.classList.remove("close");
      toggleBtn.classList.remove("rotate");
    }
  }
}

// Fungsi untuk menutup subMenu lain saat subMenu baru dibuka
function closeOtherSubMenus(currentButton) {
  dropdownButtons.forEach(btn => {
    if (btn !== currentButton) {
      const subMenu = btn.nextElementSibling;
      if (subMenu && subMenu.classList.contains("show")) { 
        // Cek apakah subMenu terbuka, dan hanya tutup yang terbuka
        subMenu.classList.remove("show");
        btn.classList.remove("rotate");
      }
    }
  });
}

// Listener untuk tombol sidebar
document.addEventListener("DOMContentLoaded", () => {
  if (toggleBtn) toggleBtn.addEventListener("click", toggleSideBar);
  dropdownButtons.forEach(btn => {
    btn.addEventListener("click", () => toggleSubMenu(btn));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const homeLink = document.querySelector('a[href="index.html"]');

  homeLink.addEventListener("click", (event) => {
    event.preventDefault(); // cegah reload/navigasi halaman
    // Bisa tambahkan behavior lain di sini jika mau
    console.log("Home link clicked, tapi tidak reload");
  });
});