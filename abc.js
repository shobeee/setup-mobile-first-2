const hamburger = document.querySelector('.hamburger');
const headerDesktop = document.getElementById('header-desktop');

hamburger.onclick = function abc() {
  headerDesktop.classList.toggle('open-menu');
  hamburger.classList.toggle('active');
};
document.querySelectorAll('.nav-links').forEach((n) => n.addEventListener('click', () => {
  headerDesktop.classList.remove('open-menu');
  hamburger.classList.toggle('active');
}));
