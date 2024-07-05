function verDestino(ciudad, precio) {
    window.location.href = `../VistaMaletas/index.html?ciudad=${encodeURIComponent(ciudad)}&precio=${precio}`;
}

document.addEventListener('DOMContentLoaded', function() {
    const openBarcelonaButton = document.getElementById('openBarcelonaButton');
    const openMilanButton = document.getElementById('openMilanButton');
    const openLiverpoolButton = document.getElementById('openLiverpoolButton');
    const closeCardButton = document.getElementById('closeCardButton');
    const cardContainer = document.getElementById('cardContainer');
    const card = document.getElementById('cardd');
    const dateForm = document.getElementById('dateForm');

    let currentCity = '';
    let currentPrice = 0;

    // Muestra la tarjeta y su contenedor al hacer clic en los botones de destino
    openBarcelonaButton.addEventListener('click', function() {
        currentCity = 'Barcelona';
        currentPrice = 800;
        cardContainer.classList.add('show');
        card.classList.add('show');
    });

    openMilanButton.addEventListener('click', function() {
        currentCity = 'Milán';
        currentPrice = 700;
        cardContainer.classList.add('show');
        card.classList.add('show');
    });

    openLiverpoolButton.addEventListener('click', function() {
        currentCity = 'Liverpool';
        currentPrice = 750;
        cardContainer.classList.add('show');
        card.classList.add('show');
    });

    // Oculta la tarjeta y su contenedor al hacer clic en el botón de cerrar
    closeCardButton.addEventListener('click', function() {
        cardContainer.classList.remove('show');
        card.classList.remove('show');
    });

    // Maneja la validación del formulario
    dateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const dateSelect = document.getElementById('dateSelect').value;

        if (dateSelect) {
            verDestino(currentCity, currentPrice);
        } else {
            alert('Por favor, seleccione una fecha.');
        }
    });
});
