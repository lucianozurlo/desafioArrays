alert("¡Hoy comemos asado!\n\nEstos son los cortes:\n· Vacío\n· Costilla\n· Entraña\n\nVamos a armar la lista para ir a la carnicería.");

//Construcción objeto CorteAsado
function CorteAsado(nombre, peso, preciokilo) {
    this.nombre = nombre;
    this.peso = peso;
    this.preciokilo  = preciokilo;
    this.preciototal = this.peso * this.preciokilo;
}

//Declaramos el array asado
const asado = [];

//Pedimos que nos ingrese cuanto quiere de cada corte
let cantVacio = parseFloat(prompt("¿Cuánto querés de Vacío? El kilo cuesta $80"));
while (isNaN(cantVacio)) {
    cantVacio = parseFloat(prompt("No ingresaste un número. Por favor, ¿cuánto querés de Vacío? El kilo cuesta $80"));
}
let cantCostilla = parseFloat(prompt("¿Cuánto querés de Costilla? El kilo cuesta $120"));
while (isNaN(cantCostilla)) {
    cantCostilla = parseFloat(prompt("No ingresaste un número. Por favor, ¿cuánto querés de Costilla? El kilo cuesta $120"));
}
let cantEntrana = parseFloat(prompt("¿Cuánto querés de Entraña? El kilo cuesta $100"));
while (isNaN(cantEntrana)) {
    cantEntrana = parseFloat(prompt("No ingresaste un número. Por favor, ¿cuánto querés de Entraña? El kilo cuesta $100"));
}

//Creamos los array por corte de carne
asado.push(new CorteAsado("Vacío", cantVacio, 80));
asado.push(new CorteAsado("Costilla", cantCostilla, 120));
asado.push(new CorteAsado("Entraña", cantEntrana, 100));

//Declaramos las variables para sumar los precios totales por corte
let precioVacio = asado[0].preciototal;
let precioCostilla = asado[1].preciototal;
let precioEntrana = asado[2].preciototal;

//Declaramos la variable totalPrecioAsado
let totalPrecioAsado;

//Función para cuando no responde por Si o No
function noSeEntiende() {
    alert("No entiendo lo que decís. Lo tomo como un NO.");
}



//Función para sumar el array para el carbón
function comprarCarbon() {
    asado.push(new CorteAsado("Carbón", 4, 20));
    let precioCarbon = asado[3].preciototal;
    totalPrecioAsado = precioVacio + precioCostilla + precioEntrana +  precioCarbon;
    return totalPrecioAsado;
}

//Función que chequea si tenés Carbón
function checkCarbon() {
    let hayCarbon = prompt("¿Tenés carbón? La bolsa es de 4kg (SI o NO)");
    if ((hayCarbon == "SI") || (hayCarbon == "si") || (hayCarbon == "Si")) {
        totalPrecioAsado = precioVacio + precioCostilla + precioEntrana;
        return totalPrecioAsado;
    } else if ((hayCarbon == "NO") || (hayCarbon == "no") || (hayCarbon == "No")) {
        comprarCarbon();
    } else {
        noSeEntiende()
        comprarCarbon();
    }
}
checkCarbon(); 

//Borrar del array los cortes que pesan 0
for (const corte of asado) {
    const eliminarArrayVacio = 0;
    const index = asado.findIndex(corte => corte.peso === eliminarArrayVacio);
    asado.splice(index, 1);
}

//Función que chequea si tenés descuento
let descuento = 0;
function checkDescuento() {
    let hayDescuento = prompt("Con la tarjeta de beneficios, tenés 20\% de descuento. ¿La tenés? (SI o NO)");
    if ((hayDescuento == "SI") || (hayDescuento == "si") || (hayDescuento == "Si")) {
        descuento = totalPrecioAsado * 0.2;
        document.write(`<br><em>¡Con tu tarjeta de beneficios te ahorraste \$${descuento}!</em><br><br>`);
        return descuento;
    } else if ((hayDescuento == "NO") || (hayDescuento == "no") || (hayDescuento == "No")) {
        document.write("<br><em>No tenés la tarjeta de beneficios</em><br><br>");
    } else {
        noSeEntiende()
        document.write("<br><em>No tenés la tarjeta de beneficios</em><br><br>");
    }
}


//Función que muestra resultado
function lista() {
    if (totalPrecioAsado !== 0) {
        document.write("<h2>¡Hoy hacemos asado!</h2><p>Lista para la carnicería:</p><ul>");
        
        for (const corte of asado) {
            //Mantengo en consola para chequear los valores
            console.log(corte.nombre);
            console.log(corte.peso);
            console.log(corte.preciokilo);
            console.log(corte.preciototal);
            //Arma el listado en pantalla
            document.write("<li><strong>" + corte.nombre + ":</strong> " + corte.peso + "kg <em>(a $" + corte.preciokilo + " el kilo, son $" + corte.preciototal + ")</em></li>");
        }
        document.write("</ul>");
        checkDescuento();
        let total = parseFloat(totalPrecioAsado) - descuento;
        document.write(`<strong>Vas a necesitar llevar \$${total}</strong>`);
    } else {
        document.write("<h2>¡Hoy hacemos asado!</h2>");
        document.write("¡No necesitás comprar nada!"); //Si no necesitás comprar nada no te muestra la opción de pagar con tarjeta de beneficios
    }
}

console.log(totalPrecioAsado);
lista();
