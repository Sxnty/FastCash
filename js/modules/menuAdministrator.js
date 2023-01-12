import burger from "./burger.js";
import loanCreator from "./loanCreator.js";
import historyMenu from "./history.js";
import profileMenu from "./profile.js";

const menuAdministrador = () => {
  let profileData = localStorage.getItem("profile");
  let profileName = JSON.parse(profileData);
  console.log(profileName)
    document.querySelector("html").innerHTML = `
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./styles/main.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
      <title>FastCash</title>
    </head>
    <body>
      <header class="header--secondary">
        <i class="bi bi-list" id="open-menu"></i>
        <div class="header__menu" id="burger-menu">
          <div class="menu__top">
            <img src="./images/flat-man.png" alt="" />
            <div class="top__text">
              <h3>${profileName.name}</h3>
              <p>Administrador</p>
            </div>
          </div>
          <ul class="menu__items">
            <li>
              <i class="bi bi-x-lg" id="close-menu"></i>
            </li>
            <li>
              <a id="index"><i class="fa-solid fa-star"></i> Inicio</a>
            </li>
            <li>
              <a href=""><i class="fa-solid fa-plus"></i> Crear prestamo</a>
              <a href=""
                ><i class="fa-solid fa-clock"></i> Historial de prestamos</a
              >
            </li>
            <li>
              <a href=""
                >Perfil</a
              >
              <a href=""
              ><i class="bi bi-box-arrow-left"></i> Cerrar sesion</a
            >
            </li>
          </ul>
        </div>
      </header>
  
      <main class="hero--admin">
        <section class="admin">
          <h2>Welcome Admin</h2>
          <div class="admin__selections">
            <div class="selection__item" id="addLoan">
            <i class="bi bi-plus-circle-dotted"></i>
              <p>Añadir prestamo</p>
            </div>
            <div class="selection__item" id="historyLoan">
            <i class="bi bi-clock-history"></i>
              <p>Historial</p>
            </div>
            <div class="selection__item" id="profile">
            <i class="bi bi-person"></i>
              <p>Perfil</p>
            </div>
            <div class="selection__item" id="logOut">
            <i class="bi bi-box-arrow-left"></i>
              <p>Cerrar sesion</p>
            </div>
          </div>
        </section>
      </main>
      <script src="./main.js"></script>
      <script
        src="https://kit.fontawesome.com/2940ba2046.js"
        crossorigin="anonymous"
      ></script>
      
    </body>
    `;
    burger();
    let logOut = document.querySelector("#logOut");
    logOut.addEventListener("click", () => {
      location.reload();
    });
    let addLoan = document.querySelector("#addLoan");
    addLoan.addEventListener("click", loanCreator);

    let history = document.getElementById("historyLoan")
    history.addEventListener("click", historyMenu)

    let profile = document.getElementById("profile")
    profile.addEventListener("click", profileMenu)

  };
  export default menuAdministrador