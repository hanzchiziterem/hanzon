 //HAMBURGER MENU SCRIPT

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');

  if (nav.classList.contains('max-h-0')) {
    nav.classList.remove('max-h-0');
    nav.classList.add('max-h-[500px]'); // height should be enough to reveal full overlay
  } else {
    nav.classList.add('max-h-0');
    nav.classList.remove('max-h-[500px]');
  }
});


// NAVBAR SCROLL SCRIPT
//NAVBAR SCROLL SCRIPT
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav.navbar');

    if (window.scrollY > 10){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});



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


//Bavk to top script
const topBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300){
    topBtn.classList.add('show');
  }else{
    topBtn.classList.remove('show');
  }

  topBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  });
});