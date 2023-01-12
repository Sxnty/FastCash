import burger from "./burger.js";
import menuAdministrador from "./menuAdministrator.js";

const historyMenu = () => {

    document.querySelector("main").innerHTML = `
    <section class="admin__loan">
    <div class="loan__top">
      <h2>Historial de prestamos</h2>
    </div>
    <div class="card__container">
    
    </div>
  </section>
    `;

    let prestamosJSON = localStorage.getItem("prestamos");
    let prestamosHistory = JSON.parse(prestamosJSON);
    prestamosHistory.forEach(element => {
        const historyContainer = document.querySelector(".card__container")
        let card = document.createElement("div")
        card.className=("loan__card")
        card.classList.add(`${element.nombre}`)
        card.innerHTML = `
        <div class="card__top">
        <h3>${element.nombre}</h3>
        <p>${element.numero}</p>
        <p>${element.email}</p>
      </div>
      <ul class="card__pay">
        <li>
          <h3 id="value">${element.cantidad}</h3>
          <p>Valor</p>
        </li>
        <li>
          <h3 id="months">${element.cuotas}</h3>
          <p>Cuotas</p>
        </li>
        <li>
          <h3 id="monthly">${element.mensual}</h3>
          <p>Mensual</p>
        </li>
      </ul>
        `
        historyContainer.append(card) 
    });


};

export default historyMenu;

