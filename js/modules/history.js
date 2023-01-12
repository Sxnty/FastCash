import burger from "./burger.js";
import menuAdministrador from "./menuAdministrator.js";

const historyMenu = () => {
    const renderLoans = () => {
        prestamosHistory.forEach(element => {
            const historyContainer = document.querySelector(".card__container")
            let card = document.createElement("div")
            card.classList.add(`loan__card`)
            card.innerHTML = `
            <div class="card__top">
            <h3>${element.nombre}</h3>
            <p>${element.email}</p>
            <p>${element.numero}</p>
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
    }
    const failedRender = () => {
        let error = document.createElement("h2")
        error.textContent = "Actualmente no hay ningun prestamo cargado."
        document.querySelector(".card__container").append(error)
    }

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
    prestamosHistory === null ? failedRender() : renderLoans()


};

export default historyMenu;

