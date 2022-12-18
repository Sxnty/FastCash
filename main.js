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
/* const AdminLogin = {
  user: "Admin",
  password: "Admin",
};
let button = document.getElementById("submit__button");
button.addEventListener("click", testLogin);
function testLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (password == AdminLogin.password && username == AdminLogin.user) {
    console.log("Logeado");
  } else {
    if(!form.querySelector('p')) {
      let form = document.getElementById("form");
      let p = document.createElement("p");
      p.innerText = "Los datos ingresados no son correctos.";
      form.append(p);
    }
  }
} */
const openMenu = () => {
  let menu = document.querySelector(".header__menu");
  menu.classList.add("active");
}
const closeMenu = () => {
  let menu = document.querySelector(".header__menu");
  menu.classList.remove("active");
}

let burger = document.querySelector("#open-menu");
burger.addEventListener("click", openMenu);

let close = document.querySelector("#close-menu");
close.addEventListener("click", closeMenu);

