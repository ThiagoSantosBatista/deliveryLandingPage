const mobileMenu = document.querySelector(".mobile-menu");
const navItems = document.querySelectorAll(".header__nav-item");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.querySelector(".header__nav");
  nav.classList.toggle("ativo");
  const ativo = nav.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", ativo);
  if (ativo) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

navItems.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

mobileMenu.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("touchstart", toggleMenu);
