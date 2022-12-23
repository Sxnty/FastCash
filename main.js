/* var prestamos = [];
const menuAdmin = () => {
  const AdminLogin = {

    user: "Admin",
    password: "Admin",
  };
  let logeado
do {
  let user = prompt("Ingrese su Usuario");
  let password = prompt("Ingrese su Contraseña");
  if (user == AdminLogin.user && password == AdminLogin.password) { 
    logeado = true
    mostrarMenu();
  }
  alert("Los datos ingresados no fueron correctos")
}while(!logeado)
};
const mostrarMenu = () => {
  let menuOption = prompt(
    "1)Crear prestamo 2)Historial de prestamos 3)Cerrar sesion"
  );
  let option = parseInt(menuOption);
  switch (option) {
    case 1: 
      crearPrestamo();
      break;
    case 2: 
      historialPrestamos();
      break;
    case 3: 
      alert ("Usted cerro sesion.")
      menuAdmin()
      break;
    default: 
      alert("Debes ingresar una opcion correcta.");
  }
};
const crearPrestamo = () => {
  function Prestamo(nombre, cantidad, cuotas, mensual) { 
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.mensual = mensual;
    this.cuotas = cuotas;
  }
  let opcionsalir; 
  do {
    let nombre = prompt("Ingrese el nombre del cliente.");
    do {
      let cantidad = prompt("Ingrese la cantidad del prestamo solicitado.");
      Cantidad = parseInt(cantidad);
      if (isNaN(Cantidad)) { 
        alert("Debe ingresar un numero");
      }
    } while (isNaN(Cantidad)); 
    do {
      let cuotas = prompt("Ingrese la cantidad de cuotas solicitadas.");
      Cuotas = parseInt(cuotas);
      if (isNaN(Cuotas)) { 
        alert("Debe ingresar un numero");
      }
    } while (isNaN(Cuotas)); 
    let mensual = Cantidad / Cuotas;
    let prestamo1 = new Prestamo(nombre, Cantidad, Cuotas, mensual);
    prestamos.push(prestamo1); 
    alert(
      `El prestamo se cargo correctamente a nombre de ${prestamo1.nombre} con una cantidad total de $${prestamo1.cantidad} y un debito mensual de $${prestamo1.mensual} durante ${prestamo1.cuotas} meses`
    );
    opcionsalir = prompt(
      "Si desea salir volver al menu ingrese 1 en caso de querer crear otro prestamo ingrese cualquier otra tecla."
    );
  } while (opcionsalir != "1");
  mostrarMenu();
};

const historialPrestamos = () => {
  let opcion;
  do {
    opcion = prompt(
      `Actualmente hay una cantidad de ${prestamos.length} prestamos cargados, ingrese el nombre del cliente para acceder a su prestamo, en caso de querer volver atras ingrese "Salir"`
    );
    for (i = 0; i < prestamos.length; i++) { 
      if (prestamos[i].nombre == opcion) { 
        alert(
          `${prestamos[i].nombre} tiene un prestamo con un valor total de $${prestamos[i].cantidad} con un debito mensual de $${prestamos[i].mensual} durante ${prestamos[i].cuotas}`
        );
      } else if (opcion != "Salir") { 
        alert("El nombre ingresado no tiene ningun prestamo cargado.");
      }
    }
  } while (opcion != "Salir"); 
  mostrarMenu();
};

menuAdmin(); */
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
const AdminLogin = {
  user: "1",
  password: "1",
};
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
    let loanName = document.getElementById("loanName").value
    let loanEmail = document.getElementById("loanEmail").value
    let loanNumber = document.getElementById("loanNumber").value

  });
  document.querySelector("#loanName").addEventListener("input", () => {
    document.getElementById("cardName").textContent = loanName.value
  })
  document.querySelector("#loanNumber").addEventListener("input", () => {
    document.getElementById("cardNumber").textContent = loanNumber.value
  })
  let nextPage = document.getElementById("loan-next")
  nextPage.addEventListener("click", () => {
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
            <button type="button">Confirmar</button>
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

    
  })

  burger();
};
const menuAdministrador = () => {
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

    <main class="hero--admin">
      <section class="admin">
        <h2>Welcome Admin</h2>
        <div class="admin__selections">
          <div class="selection__item" id="addLoan">
          <i class="bi bi-plus-circle-dotted"></i>
            <p>Añadir prestamo</p>
          </div>
          <div class="selection__item">
          <i class="bi bi-clock-history"></i>
            <p>Historial</p>
          </div>
          <div class="selection__item">
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
};

const loginAdmin = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (password == AdminLogin.password && username == AdminLogin.user) {
    menuAdministrador();
  } else {
    if (!form.querySelector("p")) {
      let form = document.getElementById("form");
      let p = document.createElement("p");
      p.innerText = "Los datos ingresados no son correctos.";
      form.append(p);
    }
  }
};

let button = document.getElementById("submit__button");
button.addEventListener("click", loginAdmin);
