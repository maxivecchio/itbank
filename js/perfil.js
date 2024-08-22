function guardarCambios() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const bio = document.getElementById("bio").value;
    const errorElement = document.getElementById("error");

    // Validación simple (puedes agregar más validaciones según necesites)
    if (!email || !password) {
      errorElement.textContent =
        "Por favor, completa todos los campos.";
      return;
    }
    if (password.length < 6) {
      errorElement.textContent =
        "La contraseña debe tener al menos 6 caracteres.";
      return;
    }

    // Aquí puedes agregar lógica para enviar los datos al servidor
    errorElement.textContent = "";
    alert("Cambios guardados con éxito!");
  }