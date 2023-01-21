import menuAdministrador from "./menuAdministrator.js";

const loginData = async () => {
  try {
    let response = await fetch("../../json/login.json");
    let resultado = await response.json();
    let loginLs = JSON.stringify(resultado);
    localStorage.setItem("login", loginLs);

    
  } catch (error) {
    console.log(error);
  }
};

if (localStorage.getItem("login") === null) {
  loginData();
}



const loginAdmin = () => {
  let adminData = localStorage.getItem("login");
let AdminLogin = JSON.parse(adminData);

if (localStorage.getItem("profile") === null) {
  let profile = {
    name: "Administrador",
  };
  let profileData = JSON.stringify(profile);
  localStorage.setItem("profile", profileData);
}
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
export default loginAdmin;
