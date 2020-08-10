function datos(e){
e.preventDefault();

var users=["gato@correo.com","perro@correo.com","tomate@correo.com"];
var password=["A1234","B1234","C1234"];

var correo= document.querySelector("#user").value;
var pass= document.querySelector("#contra").value;

var idcorreo = document.querySelector("#uno");
var idpass = document.querySelector("#dos");
var contador = 0;

    for(var i=0;i<=2;i++){
      if(correo == users[i]){
        idcorreo.innerHTML ="<p> Correct E-mail</p>";

		      if(pass == password[i]){
			       idpass.innerHTML ="<p> Correct Password</p>";

			return
		}else{
			       idpass.innerHTML ="<p> Want your pass back?</p>";
			return
		}
	}
}

	idcorreo.innerHTML ="<p> Invalid User</p>";
	document.getElementById("cuenta").style.fontStyle="italic";
  document.getElementById("cuenta").style.fontSize="17px";
}

var boton =document.querySelector("#enviar");
boton.addEventListener("click",datos);
