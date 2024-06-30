document.addEventListener('DOMContentLoaded', function () {
    generarMapaAsientos();
});

function generarMapaAsientos() {
    const filas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J'];
    const asientosPorFila = 7; // Según la imagen

    const mapa = document.getElementById('mapaAsientos');
    for (let i = 30; i <= 45; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < asientosPorFila; j++) {
            const asiento = document.createElement('td');
            asiento.textContent = filas[j] + i;
            asiento.className = 'disponible';
            asiento.onclick = function () {
                seleccionarAsiento(asiento);
            };
            fila.appendChild(asiento);
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
