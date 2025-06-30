//NAVBAR SCROLL SCRIPT
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav.navbar');

    if (window.scrollY > 10){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});


//HAMBURGER MENU SCRIPT
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})


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
