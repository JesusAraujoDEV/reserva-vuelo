document.addEventListener("DOMContentLoaded", function() {

    // Recuperar los datos de localStorage
    const datos = JSON.parse(localStorage.getItem("datosFormulario"));
    const asientoSeleccionado = localStorage.getItem("asientoSeleccionado");
    const costo = localStorage.getItem("costo");
    

    console.log(asientoSeleccionado)

    if (datos && asientoSeleccionado) {
        // Actualizar los elementos con los datos del formulario y el asiento seleccionado
        document.getElementById("nombreStatic").textContent = datos.nombre;
        document.getElementById('precioTODO').textContent = `${costo}0USD`;
        document.getElementById('destino-ciudad').textContent = datos.destino;
        document.getElementById('destino-ciudad2').textContent = datos.destino;
        document.getElementById('asientoSeleccionado').textContent = asientoSeleccionado;
    } else {
        // Manejar el caso en que no se encuentran datos
        alert("No se encontraron datos del formulario o asiento seleccionado.");
    }

    // Limpiar el asiento seleccionado de localStorage (opcional)
    localStorage.removeItem("asientoSeleccionado");


    // Event listener para el botón "Confirmar"
    document.getElementById("submitBtn").addEventListener("click", function(event) {

    // Redirigir a la página destino
    window.location.href = "../VistaInicial/index.html";
    });
});
