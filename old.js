mostrarMenu()

function mostrarMenu() {
  let opcion; /* declaro las variables afuera del do debido al scope del mismo */
  let menu;
  do {
    menu = prompt(
      "¿Que desea realizar? 1) Calcular Cuotas 2)Calcular IVA 3)Finalizar Programa"
    );
    opcion = parseInt(menu);

    switch (opcion) {
      case 1:
        calcularCuotas();
        break;
      case 2:
        calcularIva();
        break;
      case 3:
        alert("Usted finalizo el programa.");
        break;
      default:
        alert("Debe ingresar una opcion correcta.");
        break;
    }
  } while (menu != "3");
}

function calcularCuotas(){
  let montoTotal = prompt("Ingrese el monto total del prestamo.");
  let monto = parseInt(montoTotal);
  if (monto < 0) {
    /* verifico si el monto no es negativo */
    alert("Su prestamo no puede ser inferior a $0");
    return calcularCuotas();
  }
  let cuotasTotal = prompt("Ingrese la cantida de cuotas");
  let cuotas = parseInt(cuotasTotal);
  if (cuotas < 1 || cuotas > 12) {
    alert("La cantidad de cuotas debe ser mayor que 0 y menor que 12");
    return calcularCuotas();
  }
  let resultado = monto / cuotas;
  alert(`Usted pagaria $${resultado} durante ${cuotas} meses.`);
};

function calcularIva(){
  const iva = 10;
  let montoTotal = prompt("Ingrese el monto al que le quiere calcular el IVA");
  let monto = parseInt(montoTotal);
  if (monto < 0) {
    /* verifico si el monto no es negativo */
    alert("Su compra no puede ser inferior a 0");
    return calcularIva();
  }
  let resultadoIva = (monto * iva) / 100;
  alert(`El IVA total de $${monto} es: $${resultadoIva}`);
};
