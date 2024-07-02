let puestosAB = document.querySelector(".columnaAB");
for (let i = 0; i < 26; i++) {
    let randint = Math.floor(Math.random() * 2);
    let ocupado = randint === 1 ? "ocupado" : "";
    puestosAB.insertAdjacentHTML(
        "beforeend",
        `<input type="checkbox" name="boletos" id="sA${i + 1}" />
        <label for="sA${i + 1}" class="puesto ${ocupado}"></label>`
    );
}

let puestosCDEFG = document.querySelector(".columnaCDEFG");
for (let i = 0; i < 75; i++) {
    let randint = Math.floor(Math.random() * 2);
    let ocupado = randint === 1 ? "ocupado" : "";
    puestosCDEFG.insertAdjacentHTML(
        "beforeend",
        `<input type="checkbox" name="boletos" id="sC${i + 1}" />
        <label for="sC${i + 1}" class="puesto ${ocupado}"></label>`
    );
}
let puestosHJ = document.querySelector(".columnaHJ");
for (let i = 0; i < 26; i++) {
    let randint = Math.floor(Math.random() * 2);
    let ocupado = randint === 1 ? "ocupado" : "";
    puestosHJ.insertAdjacentHTML(
        "beforeend",
        `<input type="checkbox" name="boletos" id="sA${i + 1}" />
        <label for="sA${i + 1}" class="puesto ${ocupado}"></label>`
    );
}

// Selecciona todos los inputs después de haberlos añadido
let boletos = document.querySelectorAll("input[name='boletos']");
boletos.forEach((ticket) => {
    ticket.addEventListener("change", () => {
        let cantidad = Number(document.querySelector(".cantidad").innerHTML);
        let contador = Number(document.querySelector(".contador").innerHTML);

        if (ticket.checked) {
            contador += 1;
            cantidad += 200;
        } else {
            contador -= 1;
            cantidad -= 200;
        }
        document.querySelector(".cantidad").innerHTML = cantidad;
        document.querySelector(".contador").innerHTML = contador;
    });
});