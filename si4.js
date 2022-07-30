alert("Se dan 30 numeros por turno");
let promedio = 10;

for (let i = 1; i <= 30; i++) {
    let ingresarNombre = prompt("Ingresar su nombre");
    alert(" Turno  N° " + i + " Nombre: " + ingresarNombre);
    alert("El tiempo de espera es aproximadamente " + i * promedio + " minutos")
}