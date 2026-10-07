const headerToggle = document.querySelector(".header-toggle");
const headerNav = document.querySelector(".header-nav");
const headerLinks = document.querySelectorAll(".header-link");


// ========================================
// ABRIR / FECHAR MENU
// ========================================

headerToggle.addEventListener("click", () => {
  const isOpen = headerNav.classList.toggle("is-active");

  headerToggle.classList.toggle("is-active");

  headerToggle.setAttribute("aria-expanded", isOpen);
});


// ========================================
// FECHAR MENU AO CLICAR EM UM LINK
// ========================================

headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerNav.classList.remove("is-active");

    headerToggle.classList.remove("is-active");

    headerToggle.setAttribute("aria-expanded", "false");
  });
});


// ========================================
// FECHAR MENU AO REDIMENSIONAR A TELA
// ========================================

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    headerNav.classList.remove("is-active");

    headerToggle.classList.remove("is-active");

    headerToggle.setAttribute("aria-expanded", "false");
  }
});
