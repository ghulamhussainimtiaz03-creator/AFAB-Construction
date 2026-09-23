document.getElementById('year').textContent = new Date().getFullYear();
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links'); // Agar aapke nav links ki class ya id kuch aur hai toh yahan update kar lein

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}
