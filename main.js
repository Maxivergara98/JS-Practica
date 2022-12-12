
//En esta entrega lo que prepare es un array con los distintos productos del kiosco.
//En la funcion Basicamente lo que hace es preguntarle al cliente que producto quiere, cuantas unidades y devolver un array de los productos con las cantidades requeridas.
//Obviamente falta que devuelta tambien el precio total de cada producto + un precio total (y restarle al stock) pero es mucho mas complejo por ahora
const productos = [
    {
        producto: "oreos", precio: 10, stock: 10, id: 1, cantidad:0
    },
    {
        producto: "melbas", precio: 15, stock: 10, id: 2, cantidad:0
    },

    {
        producto: "pepitos", precio: 20, stock: 10, id: 3, cantidad:0
    }
]

const carrito = [];

function agregarCarrito() {
    let entrada = "si"
    while (entrada === "si") {
        let pregunta = parseInt(prompt("Eliga: 1- Oreos, 2- melbas, 3-Pepitos"))
        let pregunta2 = parseInt(prompt("cuantas unidades quiere"))
        let items = productos.find(elemento => elemento.id === pregunta);
        let itemEnCarrito = carrito.find (elemento=>elemento.id===pregunta);
        if (itemEnCarrito){
            itemEnCarrito.cantidad+= pregunta2
        } else {
            items.cantidad= pregunta2;
            carrito.push(items)
        }
        

        entrada = prompt("desea continuar Si o no")


    }



    return carrito


}

console.log(agregarCarrito());


//Esto esta comentado porque es parte de la PreEntrega1
/* 
let precio = 0;
let precioTotal = 0;

let entrada = "si";
while (entrada === "si") {
    let producto = prompt("que galletita quiere: oreos, melbas o pepitos");
    let cantidad = parseInt(prompt("cuantas unidades quiere"));
    switch (producto) {
        case "oreos":
            precio = 10 * cantidad;
            break;
        case "melbas":
            precio = 15 * cantidad;
            break;
        case "pepitos":
            precio = 20 * cantidad;
            break;
        default:
            alert("no hay otras opciones");
            break;

    }


    precioTotal = precioTotal + precio;

    entrada = prompt("Desea continuar comprando: Si o No");

}

alert(`Tu precio final es ${precioTotal}`);


//condicional con IF

let cuotas = parseInt(prompt("Cuantas cuotas quiere, 3/6/12"));
let precioFinal = 0;


if (cuotas === 3) {
    precioFinal = precioTotal / 3;
} else if (cuotas === 6) {
    precioFinal = precioTotal / 6;
} else if (cuotas === 12) {
    precioFinal = precioTotal / 12;
} else {
    alert("no aplica ");
}

alert(`Su precio Final es ${precioFinal} en ${cuotas}`);
 */