//Theme Script
const checkboxes = document.querySelectorAll('#theme-checkbox');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply saved or preferred theme
const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
root.classList.toggle('dark', isDark);
checkboxes.forEach(cb => cb.checked = isDark);

// Add event listener to all checkboxes
checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    const theme = cb.checked ? 'dark' : 'light';
    root.classList.toggle('dark', cb.checked);
    checkboxes.forEach(c => c.checked = cb.checked); // sync both toggles
    localStorage.setItem('theme', theme);
  });
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


//Mobile menu script
document.addEventListener('DOMContentLoaded', () => {
  const body       = document.body;
  const overlay    = document.querySelector('.overlay');
  const openBtn    = document.querySelector('.menu-toggle');
  const closeBtn   = document.querySelector('.overlay-close');

  function openOverlay() {
    overlay.classList.add('open');
    body.classList.add('no-scroll');
  }
  function closeOverlay() {
    overlay.classList.remove('open');
    body.classList.remove('no-scroll');
  }

  openBtn.addEventListener('click', openOverlay);
  closeBtn.addEventListener('click', closeOverlay);
});


