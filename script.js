// تبديل الوضع الليلي والنهاري
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// تبديل اللغة (مثال بسيط)
function toggleLang() {
  if (document.documentElement.lang === "ar") {
    document.documentElement.lang = "en";
    alert("Language switched to English");
  } else {
    document.documentElement.lang = "ar";
    alert("تم تغيير اللغة إلى العربية");
  }
}

// إرسال رسالة (تجريبي)
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("تم إرسال رسالتك بنجاح!");
});
// إظهار الكروت مع التمرير
window.addEventListener("scroll", () => {
  document.querySelectorAll(".project-card").forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}
