/*
Jose Fernando Chaguala Millán
Programa para encriptar y desencriptar texto
25 julio 2024
 */

function validarTexto(texto) {
    var expresionRegular = /^[a-z\s]*$/; // Expresión regular que permite solo letras minúsculas y espacios
    return expresionRegular.test(texto);
}

function mostrarResultado() {
    document.getElementById("vistaInicial").style.display = "none";
    document.getElementById("textoSalida").style.display = "block";
    // Mostrar el botón 'Copiar' quitando la clase 'boton-copiar'
    document.getElementById("botonCopiar").classList.remove("boton-copiar");

}

function encriptar() {
    var texto = document.getElementById("textoIngresado").value;

    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        return;
    }

    var textoEncriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("textoSalida").value = textoEncriptado;



    mostrarResultado();

}

function desencriptar() {
    var texto = document.getElementById("textoIngresado").value;

    if (!validarTexto(texto)) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        return;
    }

    var textoDesencriptado = texto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("textoSalida").value = textoDesencriptado;

    mostrarResultado();
}

function copiarTexto() {
    var textoSalida = document.getElementById("textoSalida").value;
    var textoIngresado = document.getElementById("textoIngresado");
    textoIngresado.value = textoSalida; // Coloca el texto encriptado/desencriptado en el campo de entrada
    textoIngresado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles y reemplazado en el campo de entrada");
}
