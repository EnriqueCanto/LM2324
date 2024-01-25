/* VERSIÓN CUTRE
function ocultarRojo(){
    document.getElementById("rojo").style.visibility = "hidden";
}

function ocultarVerde(){
    document.getElementById("verde").style.visibility = "hidden";
}

function ocultarAzul(){
    document.getElementById("azul").style.visibility = "hidden";
}
*/

/* VERSION MEJORADA */
function ocultar(caja){
    document.getElementById(caja).style.visibility = "hidden";
}

function mostrar(caja){
    document.getElementById(caja).style.visibility = "visible";
}
/*VERISÓN CON UN SOLO BOTON*/

function ocultar_o_mostrar(caja){
    if (document.getElementById(caja).style.visibility=="visible" || document.getElementById(caja).style.visibility=="" )
        document.getElementById(caja).style.visibility = "hidden";
    else  
        document.getElementById(caja).style.visibility = "visible";
}