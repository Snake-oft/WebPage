function validar(evento) {
evento.preventDefault();

var user = ["gato@correo.com", "perro@correo.com", "tomate@correo.com"];
var password = ["A1234", "B1234", "C1234"];

var eCorreo = document.querySelector("#correo").value;
var eContrasena = document.querySelector("#password").value;

for(var i=0;i<=2;i++){
    if (eCorreo===user[i]) {
        if (eContrasena===password[i]) {
        idTituloMensaje.textContent = "Welcome ";
            } else if (eContrasena!== password[i]) {
        idTituloMensaje.textContent="User Not Found";

        }   
    }
}
    
/**/
}
var boton_iniciar_sesion = document.querySelector("#iniciar");
boton_iniciar_sesion.addEventListener("click", validar);
var idTituloMensaje = document.querySelector("#CorreoInvalido");