const errorP = document.querySelector('#login-error');
errorP.style.display = 'none';

function login() {
  let user = document.getElementById("usuario").value;
  let pass = document.getElementById("clave").value;

  if (user.toLowerCase() == "juan" && pass == "1234") {
    errorP.style.display = 'none';
    window.location = "inicio.html";
  } else {
    errorP.style.display = 'block';
    errorP.textContent = 'Usuario o contraseña incorrectos';
    return;
  }
}
