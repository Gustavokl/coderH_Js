//objeto relativo a una remera, 
//se creara una class x cada color
//y class de imagenes

class remerasNegras {
    constructor(tamano, cantidad, precio, stock){
        this.tamano = tamano;
        this.cantidad = cantidad;
        this.precio = precio;
        this.stock = stock;
    }

    getTamano(){
        console.log(this.tamano);
    };

    getCantidad(){
        console.log(this.cantidad)
    };
    getPrecio(){
        console.log(this.precio)
    };

    getStock() {
        console.log(this.stock - this.cantidad);
    }
};

const solicitar = () => {
    let tamano = prompt("Ingrese el tamaño de la remera");
    let cantidad = prompt("Ingrese la cantidad");
    let precio = prompt("Ingrese el precio por unidad");
    let producto = new remerasNegras(tamano, cantidad, precio, 50);
    
    producto.getTamano();
    producto.getCantidad();
    producto.getPrecio();
    producto.getStock();
}

solicitar()