document.addEventListener('DOMContentLoaded', function () {
    const btnMostrarAsientos = document.getElementById('btnMostrarAsientos');
    const btnMostrarRegistro = document.getElementById('btnMostrarRegistro');
    const vistaRegistro = document.getElementById('registro');
    const vistaAsientos = document.getElementById('asientos');

    btnMostrarAsientos.addEventListener('click', function () {
        vistaRegistro.style.display = 'none';
        vistaAsientos.style.display = 'block';
    });

    btnMostrarRegistro.addEventListener('click', function () {
        vistaAsientos.style.display = 'none';
        vistaRegistro.style.display = 'block';
    });

    // Generar asientos aleatorios
    generarAsientos();
});

function generarAsientos() {
    // Generar asientos para columnas A y B
    generarColumnaAsientos(".columnaAB", 26);

    // Generar asientos para columnas C a G
    generarColumnaAsientos(".columnaCDEFG", 75);

    // Generar asientos para columnas H y J
    generarColumnaAsientos(".columnaHJ", 26);
}

function generarColumnaAsientos(selector, cantidad) {
    const columna = document.querySelector(selector);
    for (let i = 0; i < cantidad; i++) {
        let randint = Math.floor(Math.random() * 2);
        let ocupado = randint === 1 ? "ocupado" : "";
        columna.insertAdjacentHTML(
            "beforeend",
            `<input type="checkbox" name="boletos" id="${selector.slice(-5)}${i + 1}" />
            <label for="${selector.slice(-5)}${i + 1}" class="puesto ${ocupado}"></label>`
        );
    }
}

// Manejar la selección de boletos
let boletos = document.querySelectorAll("input[name='boletos']");
boletos.forEach((ticket) => {
    ticket.addEventListener("change", () => {
        actualizarContador();
    });
});

function actualizarContador() {
    let cantidad = 0;
    let contador = 0;

    boletos.forEach((ticket) => {
        if (ticket.checked) {
            contador += 1;
            cantidad += 200; // Precio por boleto seleccionado
        }
    });

    document.querySelector(".cantidad").innerHTML = cantidad;
    document.querySelector(".contador").innerHTML = contador;
}
