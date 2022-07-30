let p1 = 500;
let p2 = 600;
let p3 = 100;
let s1 = 1500;
let s2 = 800;
let s3 = 200;

let entrada = prompt(`Ingrese su producto o servicio:
                            \1. para comprar Tremendo auto.
                            \2. para comprar Flor de casa.
                            \3. para comprar La caña de pescar.
                            \4. para comprar Viajes.
                            \5. para comprar Mundial a full
                            \6. para comprar Take it easy.
                            \ESC para salir`
);

let cantidad = parseInt(prompt("Ingrese la cantidad o ESC para salir"));
while (entrada != "ESC") {
    let costo = 0;
    switch (entrada) {
        case "1":
            costo = costo + p1 * cantidad;
            alert("El costo total es: " + costo);
            break;
        case "2":
            costo = costo + p2 * cantidad;
            alert("El costo total es: " + costo);
            break;
        case "3":
            costo = costo + p3 * cantidad;
            alert("El costo total es: " + costo);
            break;
        case "4":
            costo = costo + s1 * cantidad;
            alert("El costo total es: " + costo);
            break;
        case "5":
            costo = costo + s2 * cantidad;
            alert("El costo total es: " + costo);
            break;
        case "6":
            costo = costo + s3 * cantidad;
            alert("El costo total es: " + costo);
            break;
        default:
            break;
    }    
    let entrada = prompt(`Ingrese su producto o servicio:
                            \1. para comprar Tremendo auto.
                            \2. para comprar Flor de casa.
                            \3. para comprar La caña de pescar.
                            \4. para comprar Viajes.
                            \5. para comprar Mundial a full
                            \6. para comprar Take it easy.
                            \ESC para salir`
    );
}

