import menuAdministrador from "./menuAdministrator.js"
const AdminLogin = {
    user: "1",
    password: "1",
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
  export default loginAdmin