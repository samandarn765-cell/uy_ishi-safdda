const form = document.getElementById("form");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const input = document.getElementById("input");

// Bitta umumiy function
function gapirtir() {
  const inputQiymat = input.value.trim();

  // agar input bo'sh bo'lsa ishlamasin
  if (inputQiymat === "") {
    result.textContent = "Iltimos, biror narsa yozing...";
    return;
  }

  // eski ovozni to'xtatadi
  speechSynthesis.cancel();

  const ovoz = new SpeechSynthesisUtterance(inputQiymat);
  ovoz.lang = "en-US"; // xohlasang uz-UZ yoki ru-RU ham qo'ysa bo'ladi
  speechSynthesis.speak(ovoz);

  result.textContent = inputQiymat;

  // inputni tozalash
  input.value = "";
}

// Enter bosilganda
form.addEventListener("submit", (e) => {
  e.preventDefault();
  gapirtir();
});

// Button bosilganda
btn.addEventListener("click", () => {
  gapirtir();
});