class remera {
    constructor(tamano, cantidad, precio, stock){
        this.tamano = tamano;
        this.cantidad = parseInt(cantidad);
        this.precio = parseFloat(precio);
    }
    sumarIva(){
        this.precio = this.precio*1.22
    }
}

const productos = [];
const agregarRemera = (remeras) => { 
    productos.push(new remera(prompt("Ingrese el tamaño de la remera"), prompt("Ingrese la cantidad"), prompt("Ingrese el precio por unidad")));

    for (const remera of productos)
    remera.sumarIva();
}
agregarRemera(remera);
console.log(productos);