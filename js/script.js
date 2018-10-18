function validarFormulario(){
	var enviar = true;

	var expRegNombre = /^[a-záéíóúñ\s]+$/;
	var expRegApellido = /^[a-záéíóúñ\s]+$/;
	var expRegEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/; 
	var expRegUrl = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i; 
	var expRegTelefono = /[0-9]{9}$/; 

	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var direccion = document.getElementById("direccion");
	var email = document.getElementById("email");
	var url = document.getElementById("url");
	var telefono = document.getElementById("telefono");
	var mensaje = document.getElementById("mensaje");
	var formulario = document.getElementById("formulario");

	if(!nombre.value){
		alert("Escriba su nombre por favor.");
		nombre.focus();
		enviar = false;
	}
	else if (!expRegNombre.exec(nombre.value)){
		alert("Este campo acepta solo letras a-z");
		enviar = false;
		nombre.focus();
	}
	else if (!apellido.value){
		alert("Escriba su apellido por favor");
		apellido.focus();
		enviar = false;
	}
	else if(!expRegApellido.exec(apellido.value)){
		alert("Este campo solo acepta letras a-z");
		enviar = false;
		apellido.focus();
	}
	else if(!direccion.value){
		alert("Escriba su dirección por favor.")
		enviar = false;
		dirección.focus();
	}
	else if (!email.value){
		alert("Escriba email por favor.");
		enviar = false;
		email.focus();
	}
	else if(!expRegEmail.exec(email.value)){
		alert("Formato de emial incorrecto");
		enviar = false;
		email.focus();
	}
	else if(url.value!="" && !expRegUrl.exec(url.value)){
		alert("Ingrese un sito web válido");
		enviar = false;
		email.focus();
	}
	else if (!telefono.value){
		alert("Escriba por favor su teléfono.");
		enviar = false;
		telefono.focus();
	}
	else if(!expRegTelefono.exec(telefono.value)){
		alert("El número de teléfono solo puede contener numeros");
		enviar = false;
		telefono.focus();
	}
	else if(!mensaje.value){
		alert("Escriba su mensaje por favor.");
		enviar = false;
		mensaje.focus;
	}
	if(enviar){
		document.formulario.submit();
	}

}

function calcular(){
	var contador = document.getElementById("contador").innerHTML = 1000 - document.getElementById("mensaje").value.length;
	//var contador = document.getElementById("contador").innerHTML = 1000 - document.formulario.mensaje.value.length;
}
window.onload = function(){
	var botonEnviar = document.getElementById("enviar");
	botonEnviar.onclick	= validarFormulario;
}