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