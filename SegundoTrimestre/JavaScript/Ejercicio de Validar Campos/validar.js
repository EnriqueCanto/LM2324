function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";        
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }
        
    }
    if (!validarEmail()){ // VALIDO EL CORREO //
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
    if(!validaPassword()){
        document.getElementById("campo4").innerHTML = "Contraseña invalida o inrequisitada";
        document.getElementById("campo5").innerHTML = "Contraseña inválida o inrequisitada";        
        estanCorrectos = false;
    }
    return estanCorrectos;
    }

/* Función validarEmail tomada de:
* https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
*/
function validarEmail(){              
	var valido;
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		valido=true;
	}else{
        valido=false;
	}
    return valido;
}
function validaPassword(){
    let clave1 = document.getElementById("password1").value;
    let clave2 = document.getElementById("password2").value;
    let passwordOK = true; // CUMPLE LOS REQUISITOS ESTABLECIDOS //
    if (clave1.length<8 || (clave1!=clave2))
        passwordOK = false;
    return passwordOK;
}

function validarDNI(){
    var letra=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    var cadena = document.getElementById("dni").value; // DNI COMPLETO //
    var numero = 
}