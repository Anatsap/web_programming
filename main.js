const OPEN_CLASSNAME = "open";

const navLinks = document.getElementById("nav-links");

function toggleMenu() {
  if (navLinks.classList.contains(OPEN_CLASSNAME)) {
    navLinks.classList.remove(OPEN_CLASSNAME);
  } else {
    navLinks.classList.add(OPEN_CLASSNAME);
  }
}

window.addEventListener('load', function() {
  document.querySelector('.hero__img').classList.add('visible');
});
window.addEventListener('load', function() {
  document.querySelector('.hero__img--mobile').classList.add('visible');
});
