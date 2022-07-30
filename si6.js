// le doy un contexto de un registro de 6 notas de la misma persona
//en caso de ser la nota final ingresada haria un array, mostrando la ultima
let nota = 0;
let acumular = 0;

for (let i = 1; i <=6; i++){
    nota = parseInt(prompt("Ingrese la nota del alumno: "));
    acumular = acumular + nota
}
alert("La nota final del estudiante es: " + (acumular / 6));