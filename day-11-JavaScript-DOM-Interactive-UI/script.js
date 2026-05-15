// Ambil element dari HTML
const title = document.getElementById("title");
const description = document.getElementById("description");

const changeTextBtn = document.getElementById("changeTextBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

// EVENT UBAH TEXT
changeTextBtn.addEventListener("click", function(){

  title.textContent = "JavaScript Itu Menyenangkan 🔥";

  description.textContent =
    "Sekarang kamu sudah mulai memahami DOM dan interaksi website.";

});

// EVENT DARK MODE
darkModeBtn.addEventListener("click", function(){

  document.body.classList.toggle("dark");

});
