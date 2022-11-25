
let precio = 0;
let precioTotal= 0;


let entrada = "si";
while (entrada === "si") {
    let producto = prompt("que galletita quiere: oreos, melbas o pepitos");
    let cantidad= parseInt(prompt ("cuantas unidades quiere"));
    switch (producto) {
        case "oreos": 
            precio= 10* cantidad;
            break;
        case "melbas":
            precio=15* cantidad;
            break;
        case "pepitos":
            precio= 20* cantidad;
            break;
        default:
            alert("no hay otras opciones");
            break;
        
    }


    precioTotal += precio;

    entrada = prompt("Desea continuar comprando: Si o No");
    
}

    alert(`Tu precio final es ${precioTotal}`);



//condicional con IF

let cuotas = parseInt(prompt("Cuantas cuotas quiere, 3/6/12"));
let precioFinal=0;


if (cuotas===3){
    precioFinal = precioTotal/3;
} else if (cuotas===6){
    precioFinal= precioTotal/6;
} else if (cuotas===12){
    precioFinal= precioTotal/12;
} else{
    alert("no aplica ");
}

alert(`Su precio Final es ${precioFinal} en ${cuotas}`);

