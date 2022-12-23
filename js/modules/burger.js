import menuAdministrador from "./menuAdministrator.js"
const burger = () => {
    const menuInteraction = () => {
      let goToIndex = document.getElementById("index")
      goToIndex.addEventListener("click", () => {
        menuAdministrador()
      })
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