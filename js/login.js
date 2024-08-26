function login() {
  let user = document.getElementById("usuario").value;
  let pass = document.getElementById("clave").value;

  if (user == "Juan" && pass == "1234") {
    window.location = "index.html";
  } else {
    alert("Datos incorrectos");
  }
}
