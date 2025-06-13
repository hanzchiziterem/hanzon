//Theme Script
const checkbox = document.getElementById('theme-checkbox');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  root.classList.toggle('dark', savedTheme === 'dark');
  checkbox.checked = savedTheme === 'dark';
} else {
  root.classList.toggle('dark', prefersDark);
  checkbox.checked = prefersDark;
}

checkbox.addEventListener('change', () => {
  const theme = checkbox.checked ? 'dark' : 'light';
  root.classList.toggle('dark', checkbox.checked);
  localStorage.setItem('theme', theme);
});


//Hero Typing Script
const text = "hanzon";
const typingSpeed = 150; // ms between letters

window.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("type-text");

  // Loop through each character and schedule its insertion
  [...text].forEach((char, i) => {
    setTimeout(() => {
      const span = document.createElement("span");
      span.classList.add("letter");
      span.textContent = char;
      target.appendChild(span);

      // trigger the fade‑in on the next paint
      requestAnimationFrame(() => {
        span.style.opacity = 1;
      });
    }, typingSpeed * i);
  });
});


