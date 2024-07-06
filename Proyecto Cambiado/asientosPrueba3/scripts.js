// Función para actualizar el asiento seleccionado
function actualizarAsientoSeleccionado(asiento) {
    // Obtener el número y letra del asiento
    var numeroAsiento = asiento.querySelector('label').innerText;
    
    // Actualizar el contenido del elemento .input-style-static
    var asientoSeleccionado = document.querySelector('.input-style-static2');
    asientoSeleccionado.innerText = numeroAsiento;
}

// Función para desmarcar todos los checkboxes excepto el actual
function desmarcarOtrosCheckboxes(actualCheckbox) {
    var checkboxes = document.querySelectorAll('.seats input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox !== actualCheckbox) {
            checkbox.checked = false;
        }
    });
}

// Evento para detectar cambios en los checkboxes de los asientos
var checkboxes = document.querySelectorAll('.seats input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            desmarcarOtrosCheckboxes(this);
            actualizarAsientoSeleccionado(this.parentElement);
        } else {
            // Si se desmarca el checkbox, limpiar el texto del asiento seleccionado
            var asientoSeleccionado = document.querySelector('.input-style-static2');
            asientoSeleccionado.innerText = '';
        }
    });
});

// Recuperar los datos de localStorage
const datos = JSON.parse(localStorage.getItem("datosFormulario"));
const costo = localStorage.getItem("costo");

if (datos) {
    // Actualizar los elementos con los datos del formulario
    document.getElementById("nombreStatic").textContent = datos.nombre;
    document.getElementById("apellidoStatic").textContent = datos.apellido;
    document.getElementById("generoStatic").textContent = datos.genero;
    document.getElementById("diaStatic").textContent = datos.fechaNacimiento.dia;
    document.getElementById("mesStatic").textContent = datos.fechaNacimiento.mes;
    document.getElementById("añoStatic").textContent = datos.fechaNacimiento.año;
    document.getElementById("nacionalidadStatic").textContent = datos.nacionalidad;
    document.getElementById('precioTODO').textContent = `${costo}0USD`;
    document.getElementById('destino-ciudad').textContent = `Caracas-${datos.destino}`;
} else {
    // Manejar el caso en que no se encuentran datos
    alert("No se encontraron datos del formulario.");
}

document.addEventListener("DOMContentLoaded", function() {
    // Event listener para el botón "Confirmar"
    document.getElementById("submitBtn").addEventListener("click", function(event) {
        // Capturar el asiento seleccionado
        const asiento = document.getElementById("asientoSeleccionado").textContent.trim();

        if (!asiento) {
            alert("Por favor seleccione su asiento.");
            event.preventDefault(); // Evitar la acción por defecto (cambiar de página)
            return;
        }

        // Guardar solo el asiento en localStorage
        localStorage.setItem("asientoSeleccionado", asiento);


        // Redirigir a la página destino
        window.location.href = "../VistaFinal/index.html";
    });
});

