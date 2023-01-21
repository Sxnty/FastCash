import historyMenu from "./history.js";
import loanCreator from "./loanCreator.js";
import menuAdministrador from "./menuAdministrator.js"
import profileMenu from "./profile.js";
const burger = () => {
    const menuInteraction = () => {
      let goToIndex = document.getElementById("index")
      goToIndex.addEventListener("click", () => {
        menuAdministrador()
      })
      let addLoan = document.getElementById("añadirPrestamo")
      addLoan.addEventListener("click", loanCreator)
      let loanHistory = document.getElementById("historialPrestamos")
      loanHistory.addEventListener("click", historyMenu)
      let profile = document.getElementById("perfil")
      profile.addEventListener("click", profileMenu)
    }
    menuInteraction()
    const openMenu = () => {
      let menu = document.querySelector(".header__menu");
      menu.classList.add("active");
    };
    const closeMenu = () => {
      let menu = document.querySelector(".header__menu");
      menu.classList.remove("active");
    };
  
    let burger = document.querySelector("#open-menu");
    burger.addEventListener("click", openMenu);
  
    let close = document.querySelector("#close-menu");
    close.addEventListener("click", closeMenu);

  };
  export default burger