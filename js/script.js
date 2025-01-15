document.addEventListener("DOMContentLoaded", function () {
  const menuHamburguer = document.getElementById("menu-hamburguer");
  const menu = document.getElementById("menu");
  const fecharMenu = document.getElementById("fechar-menu");
  const btnSaibaMais = document.getElementById("btn-saiba-mais");

  if (menuHamburguer) {
    menuHamburguer.addEventListener("click", function () {
      menu.style.display = "flex";
    });
  }

  if (fecharMenu) {
    fecharMenu.addEventListener("click", function () {
      menu.style.display = "none";
    });
  }

  if (btnSaibaMais) {
    btnSaibaMais.addEventListener("click", function (event) {
      event.preventDefault();
      menu.style.display = "flex";
    });
  }
});
// 🐕💨
