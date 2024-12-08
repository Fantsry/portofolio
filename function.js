// l-mode n-mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌙";
  } else {
    themeToggle.textContent = "☀️";
  }
});
// buat kalo submit kerefresh
window.addEventListener("pageshow", function (event) {
  if (
    event.persisted ||
    (typeof window.performance !== "undefined" &&
      window.performance.navigation.type === 2)
  ) {
    document.getElementById("myForm").reset();
    location.reload(true);
  }
});
