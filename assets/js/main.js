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

