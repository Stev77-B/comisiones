//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
// 2. Calcular disponible
function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;
    return disponible < 0 ? 0 : disponible;
}

// 4. Capacidad de pago (50%)
function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.5;
}

// 6. Interés simple
function calcularInteresSimple(monto, tasa, plazoAnios) {
    return plazoAnios * monto * (tasa / 100);
}

// 8. Total a pagar
function calcularTotalPagar(monto, interes) {
    return monto + interes + 100; // impuestos
}

// 10. Cuota mensual
function calcularCuotaMensual(total, plazoAnios) {
    let meses = plazoAnios * 12;
    return total / meses;
}

// 13. Aprobar crédito
function aprobarCredito(capacidadPago, cuotaMensual) {
    return capacidadPago > cuotaMensual;
}

// Función principal
function calcular() {

    // 1. Leer valores
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let monto = parseFloat(document.getElementById("txtMonto").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value);
    let tasa = parseFloat(document.getElementById("txtTasa").value);

    // 2. Disponible
    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("lblDisponibleValor").innerText = disponible.toFixed(2);

    // 3. Capacidad de pago
    let capacidad = calcularCapacidadPago(disponible);
    document.getElementById("lblCapacidadValor").innerText = capacidad.toFixed(2);

    // 4. Interés
    let interes = calcularInteresSimple(monto, tasa, plazo);
    document.getElementById("lblInteresValor").innerText = interes.toFixed(2);

    // 5. Total
    let total = calcularTotalPagar(monto, interes);
    document.getElementById("lblTotalValor").innerText = total.toFixed(2);

    // 6. Cuota mensual
    let cuota = calcularCuotaMensual(total, plazo);
    document.getElementById("lblCuotaValor").innerText = cuota.toFixed(2);

    // 7. Aprobación
    let aprobado = aprobarCredito(capacidad, cuota);

    let resultado = document.getElementById("lblResultado");
    if (aprobado) {
        resultado.innerText = "CRÉDITO APROBADO";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "CRÉDITO RECHAZADO";
        resultado.style.color = "red";
    }
}