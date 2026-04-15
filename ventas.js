// CONSTANTE
const VENTAS_BASE = 10;

// FUNCIÓN QUE CALCULA LA COMISIÓN
function calcularComision(numeroVentas, precioProducto) {

    let comision = 5;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }

    return comision;
}


function calcular() {



    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");


    let sueldoBaseStr = componenteSueldoBase.value;
    let ventasStr = componenteVentas.value;
    let precioStr = componentePrecio.value;

    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseInt(ventasStr);
    let precioProducto = parseFloat(precioStr);


    
     let comision = calcularComision(numeroVentas, precioProducto);
     
     let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}