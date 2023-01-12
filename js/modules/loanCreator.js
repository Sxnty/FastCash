import burger from "./burger.js";
import menuAdministrador from "./menuAdministrator.js";
var prestamos = []
const loanCreator = () => {
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
          <h3>Santiago Larrosa</h3>
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
  
      <main class="hero--loanCreator">
        <section class="admin__loan">
          <div class="loan__top">
            <h2>Informacion del cliente</h2>
          </div>
          <div class="loan__profile">
          <form action="">
          <p>* Nombre</p>
          <input
          id="loanName"
          type="text"
          name="username"
          class="test"
        />
          <p>* Correo electronico</p>
          <input type="email" id="loanEmail" name="loanEmail" itemid="loanEmail" />
          <p>* Numero de contacto</p>
          <input type="number" id="loanNumber" name="loanNumber" itemid="loanNumber"/>
          <button type="button" id="loan-next">Siguiente</button>
        </form>
          </div>
          <div class="loan__card">
            <div class="card__top">
              <h3 id="cardName">Nombre</h3>
              <p id="cardNumber">Numero</p>
            </div>
            <ul class="card__pay">
              <li>
                <h3 id="cardValue"></h3>
                <p>Valor</p>
              </li>
              <li>
                <h3 id="cardMonths"></h3>
                <p>Meses</p>
              </li>
              <li>
                <h3 id="cardMonthly"></h3>
                <p>Mensual</p>
              </li>
            </ul>
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
    document.querySelector("#loan-next").addEventListener("click", () => {  
    });
    document.querySelector("#loanName").addEventListener("input", () => {
      document.getElementById("cardName").textContent = loanName.value
    })
    document.querySelector("#loanNumber").addEventListener("input", () => {
      document.getElementById("cardNumber").textContent = loanNumber.value
    })
    let nextPage = document.getElementById("loan-next")
    nextPage.addEventListener("click", () => {
      let loanName = document.getElementById("loanName").value
      let loanEmail = document.getElementById("loanEmail").value
      let loanNumber = document.getElementById("loanNumber").value

      let container = document.querySelector(".admin__loan")
      container.innerHTML = `
      <div class="loan__top">
            <h2>Informacion del cliente</h2>
          </div>
          <div class="loan__profile">
            <form action="">
              <p>* Cantidad</p>
              <input type="number" id="loanValue" name="loanName"/>
              <p>* Cuotas</p>
              <input type="number" id="loanMonths" name="loanEmail"/>
              <button type="button" id="finish-loan">Confirmar</button>
            </form>
          </div>
          <div class="loan__card">
            <div class="card__top">
              <h3>${loanName.value}</h3>
              <p>${loanNumber.value}</p>
            </div>
            <ul class="card__pay">
              <li>
                <h3 id="value"></h3>
                <p>Valor</p>
              </li>
              <li>
                <h3 id="months"></h3>
                <p>Cuotas</p>
              </li>
              <li>
                <h3 id="monthly"></h3>
                <p>Mensual</p>
              </li>
            </ul>
          </div>
      `
      document.getElementById("loanValue").addEventListener("input", () => {
        document.getElementById("value").textContent = loanValue.value
        if(!loanMonths.value) {
          document.getElementById("monthly").textContent = loanValue.value
        }
      })
      document.getElementById("loanMonths").addEventListener("input", () => {
        document.getElementById("months").textContent = loanMonths.value
        let monthly = loanValue.value / loanMonths.value
        document.getElementById("monthly").textContent = monthly.toFixed(0)
      })
      document.getElementById("finish-loan").addEventListener("click", () => {
        let loanVal = loanValue.value
        let loanMonth = loanMonths.value
        let loanMonthly = loanVal / loanMonth
        function Prestamo(nombre, numero, email,  cantidad, cuotas, mensual) {
          this.nombre = nombre;
          this.numero = numero;
          this.email = email;
          this.cantidad = cantidad;
          this.cuotas = cuotas;
          this.mensual = mensual;
        }
        let prestamo1 = new Prestamo(
          loanName,
          loanNumber,
          loanEmail,
          loanVal,
          loanMonth,
          loanMonthly
        );
        prestamos.push(prestamo1)

        let prestamosLS = JSON.stringify(prestamos);
        localStorage.setItem("prestamos", prestamosLS);
        
        console.log(prestamo1)
        menuAdministrador()
      })
  

    })
  
    burger();
  };
export default loanCreator