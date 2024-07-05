function verDestino(ciudad, precio) {
    window.location.href = `../VistaMaletas/index.html?ciudad=${encodeURIComponent(ciudad)}&precio=${precio}`;
}