import burger from "./burger.js";
import loanHistory from "./history.js";
import menuAdministrador from "./menuAdministrator.js";
/* import { AdminLogin } from "./loginAdmin.js"; */



const profileMenu = () => {
    let profileData = localStorage.getItem("profile");
    let profileName = JSON.parse(profileData);

    document.querySelector("main").innerHTML = `
    <section class="admin__loan">
        <div class="loan__top">
          <h2>Administrar perfil</h2>
        </div>
      </section>
      <section class="profile">
        <img src="./images/flat-man.png" alt="profile pictura">
        <h3 id="name-title">${profileName.name}</h3>
        <form class="username__changer">
            <h4>Nombre:</h4>
            <input type="text" name="userUser" id="userUser" placeholder="Nuevo nombre.">
            <p id="invalid-user"></p>
            <button type="button" id="userChanger">Cambiar Nombre</button>
            
        </form>
        <form class="password__changer">
            <h4>Contraseña:</h4>
            <input type="password" name="userPass" id="userPass" placeholder="Ingrese nueva contraseña">
            <input type="password" name="userPass2" id="userPass2" placeholder="Confirme nueva contraseña">
            <p id="password-miss"></p>
            <button type="button" id="passChanger">Cambiar contraseña</button>

        </form>
      </section>
    `
    const nameInput = document.getElementById("userUser")
    nameInput.addEventListener("input", () => {
        document.getElementById("name-title").textContent= `${nameInput.value}`
    })
    let changeName = document.getElementById("userChanger")
    changeName.addEventListener("click", () => {
        let name = document.getElementById("userUser").value


        if(name != "" && name.length<28) {
            profileName.name = name
            let profileData = JSON.stringify(profileName);
            localStorage.setItem("profile", profileData);

           
            document.getElementById("invalid-user").textContent = "Nombre cambiado correctamente. "
        } else {
            document.getElementById("invalid-user").textContent = "El nombre debe tener una cantidad menor a 28 caracteres y no debe ser nulo. "
        }


        

    })

    let changePass = document.getElementById("passChanger")
    changePass.addEventListener("click", () => {
        let pass1 = document.getElementById("userPass").value
        let pass2 = document.getElementById("userPass2").value
        if(pass1 === pass2) {
            if(pass1 != "" || pass2 != "") {
                let loginSwitcher = {
                    user: 1,
                    password: pass1
                }
                let newPassword = JSON.stringify(pass1);
                localStorage.setItem("login", JSON.stringify(loginSwitcher));
                const loginTest = JSON.parse(localStorage.getItem("login"));
                console.log(loginTest)
                document.getElementById("password-miss").textContent = "Contraseña cambiada correctamente."
            }
        } else {
            document.getElementById("password-miss").textContent = "Las contraseñas no coinciden o son nulas."
        }
    })
}
export default profileMenu