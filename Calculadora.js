var nombre = (prompt("Ingrese el nombre del alumno"));
var materia = (prompt("Ingrese la materia del alumno"));

var nota1 = parseFloat(prompt("Ingrese la primera nota"));
var nota2 = parseFloat(prompt("Ingrese la segunda nota"));
var nota3 = parseFloat(prompt("Ingrese la tercera nota"));

var valido = true;
var mensajeError = "";

if (isNaN(nota1) || nota1 <= 0 || nota1 > 10) {
    mensajeError += "La primera nota no se encuentra en el rango permitido (1-10)\n";
    valido = false;
}

if (isNaN(nota2) || nota2 <= 0 || nota2 > 10) {
    mensajeError += "La segunda nota no se encuentra en el rango permitido (1-10)\n";
    valido = false;
}

if (isNaN(nota3) || nota3 <= 0 || nota3 > 10) {
    mensajeError += "La tercera nota no se encuentra en el rango permitido (1-10)\n";
    valido = false;
}

if (!valido) {
    alert(mensajeError);
} else {
    var promedio = (nota1 + nota2 + nota1) / 3;
    if (promedio >= 7)
        alert(nombre + " Felicidades! Has aprobado " + materia + " El promedio obtenido es de: " + promedio)
    else
        alert(nombre + " Gracias por tu esfuerzo, nos vemos pronto en clase " + materia + " El promedio obtenido es de: " + promedio)
}