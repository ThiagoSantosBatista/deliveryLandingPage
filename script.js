const mobileMenu = document.querySelector(".mobile-menu");
const navItems = document.querySelectorAll(".header__nav-item");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.querySelector(".header__nav");

  nav.classList.toggle("ativo");
  const ativo = nav.classList.contains("ativo");
  mobileMenu.setAttribute("aria-expanded", ativo);
  if (ativo) {
    mobileMenu.setAttribute("aria-label", "Fechar menu");
  } else {
    mobileMenu.setAttribute("aria-label", "Abrir menu");
  }
}

navItems.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

mobileMenu.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("touchstart", toggleMenu);
