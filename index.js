const Remeras = [
    {
        color: "Negro",
        largo: "s",
        imagen: "dragon",
    },
    {
        color: "blanco",
        largo: "x",
        imagen: "arbol",
    },
    {
        color: "Amarillo",
        largo: "l",
        imagen: "oceano",
    },
]

let accion = ""

while (accion != "SALIR"){
    accion = prompt("Ingrese COMPRAR|VER|SALIR")
    switch (accion){
        case "COMPRAR":
            comprarRemera()
            break;
        case "VER":
            verPelicula()
            break;
        case "SALIR":
            alert("Hasta la proxima visita!")
            break;
        default:
            alert("Ingrese una acción válida")
            break;
    }
}
function comprarRemera(){
    let remeraElegida = prompt("Ingrese el color de remera que quiere comprar")
    let remeraCompra = "Si"
    const remeraBuscada = Remeras.find((remera)=>{
        return remera.color == remeraElegida
    })
    if(remeraBuscada){
        console.log("Remera del color elegido en stock:")
        console.log(remeraBuscada)     
        console.log("") 
        if (remeraCompra == prompt("Desea comprarla? Si|No")) {
            console.log("Felicidades, ud. compro su remera!")  
        }           
    } else {
        console.log("No se encontró ninguna remera de su color elegido")
    }
}

function verRemeras(){
    Remeras.forEach((remera)=>{
        alert(`Color: ${remera.color} Largo: ${remera.largo} Imagen: ${remera.imagen}`)
    })
}