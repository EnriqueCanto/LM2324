/* REALIZADO POR ENRIQUE CANTO PARA CALCULAR LAS NOTAS DEL CICLO */

var notas = [];

function anadir(){
    let numero = parseFloat(document.getElementById("numero").value);

    // BORRAMOS CUALQUIER MENSAJE DE ERROR PREVIO //
    document.getElementById("aviso").innerHTML = "";

    if (isNaN(numero)){ // PARA COMPROBAR SI ES UN NÚMERO O NO //
        document.getElementById("aviso").innerHTML = "Debes introducir un número entre 0 y 10, campeón."
    }
    else{
        // COMPRUEBO QUE ESTÁ COMPRENDIDO ENTRE 0 Y 10 //
        if (numero<0 || numero>10){
            document.getElementById("aviso").innerHTML = "Debes introducir un número entre 0 y 10, campeón."
        }
        else{
            notas.push(numero);
            document.getElementById("notas").innerHTML = notas;
        }
    }
}

function borrar(){
    document.getElementById("aviso").innerHTML="";
    document.getElementById("notas").innerHTML="";
    let elementos = notas.length();
    notas=[];
}

function calcularMedia(){
    let total=0.0;
    for (var i=0;i<notas.length;i++){
        total = total+notas[i];
    }
    total = total/notas.length;
    document.getElementById("resultado").innerHTML = total.toFixed(2);
}
