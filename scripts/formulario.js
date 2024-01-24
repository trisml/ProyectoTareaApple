const nombre = document.getElementById("name");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const mensaje = document.getElementById("message");
const tlf = document.getElementById("tlf");
const enviar = document.getElementById("submit-btn");
const errores = document.getElementById("errors-message");
const formulario = document.getElementById("form");
let mensajesError = [];
const validacion = (evento) => {
  evento.preventDefault();
  mensajesError = [];
  nombre.classList.remove("error-border");
  apellidos.classList.remove("error-border");
  correo.classList.remove("error-border");
  tlf.classList.remove("error-border");
  mensaje.classList.remove("error-border");
  if (nombre.value.trim().length === 0) {
    mensajesError.push("El campo nombre no puede estar vacío");
    nombre.classList.add("error-border");
  } else if (!/^[a-zA-Z]*$/.test(nombre.value.trim())) {
    mensajesError.push("Introduzca un nombre válido");
    nombre.classList.add("error-border");
  }
  if (apellidos.value.trim().length === 0) {
    mensajesError.push("El campo apellidos no puede estar vacío");
    apellidos.classList.add("error-border");
  } else if (!/^[a-zA-Z]*$/.test(apellidos.value.trim())) {
    mensajesError.push("Introduzca apellidos válidos");
    apellidos.classList.add("error-border");
  }
  if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo.value.trim())
  ) {
    mensajesError.push("Introduzca un correo electrónico válido");
    correo.classList.add("error-border");
  }
  if (mensaje.value.trim().length < 10) {
    mensajesError.push("El mensaje debe tener al menos 10 caracteres");
    mensaje.classList.add("error-border");
  } else {
    mensaje.classList.remove("error-border");
  }
  if (!/^\d{9}$/.test(tlf.value.trim())) {
    mensajesError.push("Introduzca un número de teléfono válido");
    tlf.classList.add("error-border");
  }
  if (mensajesError.length === 0) {
    if (confirm("¿Está seguro de enviar el formulario?")) {
      formulario.submit();
    }
  } else {
    errores.textContent = "";
    mensajesError.forEach(function (mensaje) {
      const error = document.createElement("li");
      error.textContent = mensaje;
      errores.appendChild(error);
      error.style.color = "red";
      error.style.fontWeight = "bold";
    });
    errores.style.display = "block";
  }
};
formulario.addEventListener("submit", validacion);
