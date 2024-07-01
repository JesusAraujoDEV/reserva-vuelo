let puestos = document.querySelector(".todo-puestos")
for(var i=0;i<60;i++){
    let randint = Math.floor(Math.random() * 2);
    let ocupado = randint == 1 ? "ocupado" : "";
    puestos.insertAdjacentHTML(
        "beforeend",
        '<input type="checkbox" name="boletos" id="s' +
        (i + 2) +
        '" /><label for="s' +
        (i + 2) +
        '" class="puesto ' +
        ocupado +
        '"></label>'
    );
}

let boletos = puestos.querySelectorAll("input");
      boletos.forEach((ticket) => {
        ticket.addEventListener("change", () => {
          let cantidad = document.querySelector(".cantidad").innerHTML;
          let contador = document.querySelector(".contador").innerHTML;
          cantidad = Number(cantidad);
          contador = Number(contador);

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