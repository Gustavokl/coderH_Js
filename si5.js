// le doy un contexto de un registro de 5 personas
let edad = 0;
let contar = 0;

for (let i = 1; i <=5; i++){
    edad = parseInt(prompt("Ingrese su edad: "));
    contar = contar + edad
}
alert("El promedio de edad del registro es: " + (contar / 5));