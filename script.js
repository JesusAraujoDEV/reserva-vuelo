document.addEventListener('DOMContentLoaded', function () {
    generarMapaAsientosAB();
    generarMapaAsientosCDEFG();
    generarMapaAsientosHJ();
});

function generarMapaAsientosAB() {
    const filas = ['A', 'B'];
    const rangoColumnas = { 'A': [31, 43], 'B': [31, 43] };
    const mapa = document.getElementById('tablaAsientosAB');

    for (let i = 30; i <= 45; i++) {
        const fila = document.createElement('tr');
        for (let col of filas) {
            if (i >= rangoColumnas[col][0] && i <= rangoColumnas[col][1]) {
                const asiento = document.createElement('td');
                asiento.textContent = col + i;
                asiento.className = 'disponible';
                asiento.onclick = function () {
                    seleccionarAsiento(asiento);
                };
                fila.appendChild(asiento);
            } else {
                const celdaVacia = document.createElement('td');
                fila.appendChild(celdaVacia);
            }
        }
        mapa.appendChild(fila);
    }
}

function generarMapaAsientosCDEFG() {
    const filas = ['C', 'D', 'E', 'F', 'G'];
    const mapa = document.getElementById('tablaAsientosCDEFG');

    for (let i = 30; i <= 45; i++) {
        const fila = document.createElement('tr');
        for (let col of filas) {
            if (i > 40 && col === 'E') {
                continue; // Omitir la columna 'E' después de la fila 40
            }
            const asiento = document.createElement('td');
            asiento.textContent = col + i;
            asiento.className = 'disponible';
            asiento.onclick = function () {
                seleccionarAsiento(asiento);
            };
            fila.appendChild(asiento);
        }
        mapa.appendChild(fila);
    }
}

function generarMapaAsientosHJ() {
    const filas = ['H', 'J'];
    const rangoColumnas = { 'H': [31, 43], 'J': [31, 43] };
    const mapa = document.getElementById('tablaAsientosHJ');

    for (let i = 30; i <= 45; i++) {
        const fila = document.createElement('tr');
        for (let col of filas) {
            if (i >= rangoColumnas[col][0] && i <= rangoColumnas[col][1]) {
                const asiento = document.createElement('td');
                asiento.textContent = col + i;
                asiento.className = 'disponible';
                asiento.onclick = function () {
                    seleccionarAsiento(asiento);
                };
                fila.appendChild(asiento);
            } else {
                const celdaVacia = document.createElement('td');
                fila.appendChild(celdaVacia);
            }
        }
        mapa.appendChild(fila);
    }
}

function seleccionarAsiento(asiento) {
    if (asiento.classList.contains('no-disponible')) {
        alert('Este asiento no está disponible');
        return;
    }
    document.getElementById('asiento').value = asiento.textContent;
}

function reservarAsiento() {
    const nombre = document.getElementById('nombre').value;
    const equipaje = document.getElementById('equipaje').value;
    const asiento = document.getElementById('asiento').value;
    
    if (!nombre || !asiento) {
        alert('Por favor, complete todos los campos');
        return;
    }

    const asientoTd = Array.from(document.querySelectorAll('#mapaAsientos td'))
        .find(td => td.textContent === asiento);

    if (!asientoTd) {
        alert('Asiento no válido');
        return;
    }

    asientoTd.className = 'no-disponible';
    asientoTd.onclick = null;

    const pasajeroInfo = document.createElement('li');
    pasajeroInfo.textContent = `Pasajero: ${nombre}, Asiento: ${asiento}, Equipaje: ${equipaje}`;
    document.getElementById('pasajerosRegistrados').appendChild(pasajeroInfo);

    document.getElementById('reservaForm').reset();
}

function mostrarPasajeros() {
    const pasajeros = document.getElementById('pasajerosRegistrados');
    if (pasajeros.style.display === 'none' || pasajeros.style.display === '') {
        pasajeros.style.display = 'block';
    } else {
        pasajeros.style.display = 'none';
    }
}
