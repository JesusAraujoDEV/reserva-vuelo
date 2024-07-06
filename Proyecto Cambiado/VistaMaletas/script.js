// Lista de nacionalidades
const nacionalidades = [
  "Afganistán",
  "Albania",
  "Argelia",
  "Andorra",
  "Angola",
  "Antigua y Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaiyán",
  "Bahamas",
  "Baréin",
  "Bangladesh",
  "Barbados",
  "Bielorrusia",
  "Bélgica",
  "Belice",
  "Benín",
  "Bután",
  "Bolivia",
  "Bosnia y Herzegovina",
  "Botsuana",
  "Brasil",
  "Brunéi",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Camboya",
  "Camerún",
  "Canadá",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoras",
  "Congo",
  "Costa Rica",
  "Croacia",
  "Cuba",
  "Chipre",
  "República Checa",
  "Dinamarca",
  "Dominica",
  "República Dominicana",
  "Ecuador",
  "Egipto",
  "El Salvador",
  "Guinea Ecuatorial",
  "Eritrea",
  "Estonia",
  "Etiopía",
  "Fiyi",
  "Finlandia",
  "Francia",
  "Gabón",
  "Gambia",
  "Georgia",
  "Alemania",
  "Ghana",
  "Grecia",
  "Granada",
  "Guatemala",
  "Guinea",
  "Guinea-Bisáu",
  "Guyana",
  "Haití",
  "Honduras",
  "Hungría",
  "Islandia",
  "India",
  "Indonesia",
  "Irán",
  "Iraq",
  "Irlanda",
  "Israel",
  "Italia",
  "Jamaica",
  "Japón",
  "Jordania",
  "Kazajistán",
  "Kenia",
  "Kiribati",
  "Corea del Norte",
  "Corea del Sur",
  "Kosovo",
  "Kuwait",
  "Kirguistán",
  "Laos",
  "Letonia",
  "Líbano",
  "Lesoto",
  "Liberia",
  "Libia",
  "Liechtenstein",
  "Lituania",
  "Luxemburgo",
  "Madagascar",
  "Malawi",
  "Malasia",
  "Maldivas",
  "Malí",
  "Malta",
  "Islas Marshall",
  "Mauritania",
  "Mauricio",
  "México",
  "Micronesia",
  "Moldavia",
  "Mónaco",
  "Mongolia",
  "Montenegro",
  "Marruecos",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Países Bajos",
  "Nueva Zelanda",
  "Nicaragua",
  "Níger",
  "Nigeria",
  "Noruega",
  "Omán",
  "Pakistán",
  "Palaos",
  "Panamá",
  "Papúa Nueva Guinea",
  "Paraguay",
  "Perú",
  "Filipinas",
  "Polonia",
  "Portugal",
  "Catar",
  "Rumanía",
  "Rusia",
  "Ruanda",
  "San Cristóbal y Nieves",
  "Santa Lucía",
  "San Vicente y las Granadinas",
  "Samoa",
  "San Marino",
  "Santo Tomé y Príncipe",
  "Arabia Saudita",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leona",
  "Singapur",
  "Eslovaquia",
  "Eslovenia",
  "Islas Salomón",
  "Somalia",
  "Sudáfrica",
  "España",
  "Sri Lanka",
  "Sudán",
  "Surinam",
  "Suecia",
  "Suiza",
  "Siria",
  "Taiwán",
  "Tayikistán",
  "Tanzania",
  "Tailandia",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad y Tobago",
  "Túnez",
  "Turquía",
  "Turkmenistán",
  "Tuvalu",
  "Uganda",
  "Ucrania",
  "Emiratos Árabes Unidos",
  "Reino Unido",
  "Estados Unidos",
  "Uruguay",
  "Uzbekistán",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabue"
];

const paisesConPrefijo = {
  "Afganistán": "+93",
  "Albania": "+355",
  "Alemania": "+49",
  "Andorra": "+376",
  "Angola": "+244",
  "Antigua y Barbuda": "+1-268",
  "Arabia Saudita": "+966",
  "Argelia": "+213",
  "Argentina": "+54",
  "Armenia": "+374",
  "Australia": "+61",
  "Austria": "+43",
  "Azerbaiyán": "+994",
  "Bahamas": "+1-242",
  "Bangladés": "+880",
  "Barbados": "+1-246",
  "Baréin": "+973",
  "Bélgica": "+32",
  "Belice": "+501",
  "Benín": "+229",
  "Bielorrusia": "+375",
  "Birmania (Myanmar)": "+95",
  "Bolivia": "+591",
  "Bosnia y Herzegovina": "+387",
  "Botsuana": "+267",
  "Brasil": "+55",
  "Brunéi": "+673",
  "Bulgaria": "+359",
  "Burkina Faso": "+226",
  "Burundi": "+257",
  "Bután": "+975",
  "Cabo Verde": "+238",
  "Camboya": "+855",
  "Camerún": "+237",
  "Canadá": "+1",
  "Chad": "+235",
  "Chile": "+56",
  "China": "+86",
  "Chipre": "+357",
  "Colombia": "+57",
  "Comoras": "+269",
  "Congo": "+242",
  "Corea del Norte": "+850",
  "Corea del Sur": "+82",
  "Costa de Marfil": "+225",
  "Costa Rica": "+506",
  "Croacia": "+385",
  "Cuba": "+53",
  "Dinamarca": "+45",
  "Dominica": "+1-767",
  "República Dominicana": "+1-809, +1-829, +1-849",
  "Ecuador": "+593",
  "Egipto": "+20",
  "El Salvador": "+503",
  "Guinea Ecuatorial": "+240",
  "Eritrea": "+291",
  "Eslovaquia": "+421",
  "Eslovenia": "+386",
  "España": "+34",
  "Estados Unidos": "+1",
  "Estonia": "+372",
  "Etiopía": "+251",
  "Filipinas": "+63",
  "Finlandia": "+358",
  "Fiyi": "+679",
  "Francia": "+33",
  "Gabón": "+241",
  "Gambia": "+220",
  "Georgia": "+995",
  "Ghana": "+233",
  "Granada": "+1-473",
  "Grecia": "+30",
  "Guatemala": "+502",
  "Guinea": "+224",
  "Guinea-Bisáu": "+245",
  "Guayana": "+592",
  "Haití": "+509",
  "Honduras": "+504",
  "Hungría": "+36",
  "India": "+91",
  "Indonesia": "+62",
  "Irak": "+964",
  "Irán": "+98",
  "Irlanda": "+353",
  "Islandia": "+354",
  "Islas Cook": "+682",
  "Islas Marshall": "+692",
  "Islas Salomón": "+677",
  "Israel": "+972",
  "Italia": "+39",
  "Jamaica": "+1-876",
  "Japón": "+81",
  "Jordania": "+962",
  "Kazajistán": "+7",
  "Kenia": "+254",
  "Kirguistán": "+996",
  "Kiribati": "+686",
  "Kuwait": "+965",
  "Laos": "+856",
  "Lesoto": "+266",
  "Letonia": "+371",
  "Líbano": "+961",
  "Liberia": "+231",
  "Libia": "+218",
  "Liechtenstein": "+423",
  "Lituania": "+370",
  "Luxemburgo": "+352",
  "Madagascar": "+261",
  "Malasia": "+60",
  "Malaui": "+265",
  "Maldivas": "+960",
  "Malí": "+223",
  "Malta": "+356",
  "Marruecos": "+212",
  "Mauricio": "+230",
  "Mauritania": "+222",
  "México": "+52",
  "Micronesia": "+691",
  "Moldavia": "+373",
  "Mónaco": "+377",
  "Mongolia": "+976",
  "Montenegro": "+382",
  "Mozambique": "+258",
  "Namibia": "+264",
  "Nauru": "+674",
  "Nepal": "+977",
  "Nicaragua": "+505",
  "Níger": "+227",
  "Nigeria": "+234",
  "Noruega": "+47",
  "Nueva Zelanda": "+64",
  "Omán": "+968",
  "Países Bajos": "+31",
  "Pakistán": "+92",
  "Palaos": "+680",
  "Panamá": "+507",
  "Papúa Nueva Guinea": "+675",
  "Paraguay": "+595",
  "Perú": "+51",
  "Polonia": "+48",
  "Portugal": "+351",
  "Qatar": "+974",
  "Reino Unido": "+44",
  "República Centroafricana": "+236",
  "República Checa": "+420",
  "República del Congo": "+242",
  "República de Macedonia del Norte": "+389",
  "República Democrática del Congo": "+243",
  "República Dominicana": "+1-809, +1-829, +1-849",
  "Rumanía": "+40",
  "Rusia": "+7",
  "Ruanda": "+250",
  "Samoa": "+685",
  "San Cristóbal y Nieves": "+1-869",
  "San Marino": "+378",
  "San Vicente y las Granadinas": "+1-784",
  "Santa Lucía": "+1-758",
  "Santo Tomé y Príncipe": "+239",
  "Senegal": "+221",
  "Serbia": "+381",
  "Seychelles": "+248",
  "Sierra Leona": "+232",
  "Singapur": "+65",
  "Siria": "+963",
  "Somalia": "+252",
  "Sri Lanka": "+94",
  "Sudáfrica": "+27",
  "Sudán": "+249",
  "Sudán del Sur": "+211",
  "Suecia": "+46",
  "Suiza": "+41",
  "Surinam": "+597",
  "Swazilandia": "+268",
  "Tailandia": "+66",
  "Tanzania": "+255",
  "Tayikistán": "+992",
  "Timor Oriental": "+670",
  "Togo": "+228",
  "Tonga": "+676",
  "Trinidad y Tobago": "+1-868",
  "Túnez": "+216",
  "Turkmenistán": "+993",
  "Turquía": "+90",
  "Tuvalu": "+688",
  "Ucrania": "+380",
  "Uganda": "+256",
  "Uruguay": "+598",
  "Uzbekistán": "+998",
  "Vanuatu": "+678",
  "Vaticano": "+379",
  "Venezuela": "+58",
  "Vietnam": "+84",
  "Yemen": "+967",
  "Yibuti": "+253",
  "Zambia": "+260",
  "Zimbabue": "+263"
};

// Función para agregar opciones al dropdown
function populatePaisesDropdown() {
  const dropdown = document.getElementById('nacionalidad');

  nacionalidades.forEach(nacionalidad => {
      const option = document.createElement('option');
      option.value = nacionalidad.toLowerCase();
      option.text = nacionalidad;
      dropdown.appendChild(option);
  });
}

// Función para poblar el dropdown con los países y prefijos
function populateDropdown() {
  const dropdown = document.getElementById('prefijosDropdown');

  // Iterar sobre el objeto paisesConPrefijo
  for (const pais in paisesConPrefijo) {
      if (paisesConPrefijo.hasOwnProperty(pais)) {
          const option = document.createElement('option');
          option.value = paisesConPrefijo[pais];
          option.textContent = `${paisesConPrefijo[pais]}`;
          dropdown.appendChild(option);
      }
  }
}

// Llamar a la función para poblar el dropdown cuando se cargue la página
document.addEventListener('DOMContentLoaded', populatePaisesDropdown);


// Llamar a la función para poblar el dropdown cuando se cargue la página
document.addEventListener('DOMContentLoaded', populateDropdown);

// Función para poblar el dropdown de días
function populateDiasDropdown() {
  const dropdown = document.getElementById('diaDropdown');

  // Crear opciones para los días del 1 al 31
  for (let i = 1; i <= 31; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      dropdown.appendChild(option);
  }
}

// Función para poblar el dropdown de meses
function populateMesesDropdown() {
  const meses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const dropdown = document.getElementById('mesDropdown');

  // Crear opciones para los meses
  meses.forEach((mes, index) => {
      const option = document.createElement('option');
      option.value = index + 1; // Los meses empiezan en 1 (enero)
      option.textContent = mes;
      dropdown.appendChild(option);
  });
}

// Función para poblar el dropdown de años
function populateAñosDropdown() {
  const dropdown = document.getElementById('añoDropdown');
  const yearInicial = 2007; // Año inicial deseado
  const yearFinal = 1950; // Año final deseado (puedes ajustar este valor según tus necesidades)

  // Crear opciones para los años desde el año inicial hasta el año final
  for (let year = yearInicial; year >= yearFinal; year--) {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      dropdown.appendChild(option);
  }
}


// Llamar a las funciones para poblar los dropdowns cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
  populateDiasDropdown();
  populateMesesDropdown();
  populateAñosDropdown();
});

// Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const ciudad = urlParams.get('ciudad');
const precio = urlParams.get('precio');

// Mostrar los datos en los elementos correspondientes
document.getElementById('destino-ciudad').textContent = `Caracas-${ciudad}`;
document.getElementById('precioTODO').textContent = `${precio}USD`;


document.getElementById("submitBtn").addEventListener("click", function(event) {
  // Capturar los datos del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const genero = document.getElementById("genero").value;
  const dia = document.getElementById("diaDropdown").value;
  const mes = document.getElementById("mesDropdown").value;
  const año = document.getElementById("añoDropdown").value;
  const nacionalidad = document.getElementById("nacionalidad").value;

  const prefijo = document.getElementById("prefijosDropdown").value;
  const postfijo = document.getElementById("telefonoInput").value;
  const numeroTelefono = prefijo + postfijo;

  const correo = document.getElementById("emailInput")
  // Destino
  // Obtener el elemento por su id
  const destinoCiudadElement = document.getElementById('destino-ciudad');

  // Obtener el texto del elemento y separar por el guion
  const textoCompleto = destinoCiudadElement.textContent.trim(); // Obtener el texto y eliminar espacios al inicio y final
  const ciudad = textoCompleto.split('-')[1].trim(); // Separar por el guion y obtener la segunda parte, luego eliminar espacios al inicio y final
  // Costo
  const precioBaseElement = document.getElementById('precioTODO');
  let precioBaseText = precioBaseElement.textContent.trim(); // Remueve espacios alrededor
  precioBaseText = precioBaseText.replace(/[^\d,.-]/g, ''); // Remueve cualquier carácter no numérico excepto , y .
  const costo = parseFloat(precioBaseText.replace(',', '.')); // Convierte el texto a número
  console.log(costo)

  // Validar que todos los campos estén completos
  if (!nombre || !apellido || !genero || !dia || !mes || !año || !nacionalidad || !postfijo || !prefijo || !correo || (postfijo.value < 10)) {
      alert("Por favor complete todos los campos del formulario.");
      event.preventDefault(); // Evitar la acción por defecto (cambiar de página)
      return;
  }

  // Crear un objeto con los datos
  const datos = {
      nombre: nombre,
      apellido: apellido,
      genero: genero,
      fechaNacimiento: {
          dia: dia,
          mes: mes,
          año: año
      },
      nacionalidad: nacionalidad,
      destino: ciudad
  };

  // Guardar los datos en localStorage
  localStorage.setItem("datosFormulario", JSON.stringify(datos));
  localStorage.setItem("costo", costo);

  // Redirigir a la página destino
  window.location.href = "../asientosPrueba3/index.html";
});



// script.js

document.addEventListener('DOMContentLoaded', function() {
  const openCardButton = document.getElementById('openMascotaButton');
  const closeCardButton = document.getElementById('closeCardButton');
  const cardContainer = document.getElementById('cardContainer');
  const card = document.getElementById('cardd');

  // Muestra la tarjeta y su contenedor al hacer clic en "Elegir asientos"
  openCardButton.addEventListener('click', function() {
      cardContainer.classList.add('show');
      card.classList.add('show');
  });

  // Oculta la tarjeta y su contenedor al hacer clic en el botón de cerrar
  closeCardButton.addEventListener('click', function() {
      cardContainer.classList.remove('show');
      card.classList.remove('show');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menosButtons = document.querySelectorAll('.menos-button');
  const masButtons = document.querySelectorAll('.mas-button');
  const precioTODOs = document.querySelectorAll('.precio-todo');

  const incrementValues = {
      chico: 150,
      mediano: 250,
      grande: 350,
      maleta: 70
  };

  // Obtén el precio base del elemento del DOM
  const precioBaseElement = document.getElementById('precioTODO');
  let precioBaseText = precioBaseElement.textContent.trim(); // Remueve espacios alrededor
  precioBaseText = precioBaseText.replace(/[^\d,.-]/g, ''); // Remueve cualquier carácter no numérico excepto , y .
  let precioBase = parseFloat(precioBaseText.replace(',', '.')); // Convierte el texto a número
  
  console.log(precioBase)


  menosButtons.forEach(button => {
      button.addEventListener('click', function() {
          const contadorSpan = button.nextElementSibling;
          let contador = parseInt(contadorSpan.textContent);
          const tipo = contadorSpan.getAttribute('data-tipo');

          if (contador > 0) {
              contador--;
              contadorSpan.textContent = contador;
              actualizarPrecio();
          }
      });
  });

  masButtons.forEach(button => {
      button.addEventListener('click', function() {
          const contadorSpan = button.previousElementSibling;
          let contador = parseInt(contadorSpan.textContent);
          const tipo = button.getAttribute('data-tipo');

          contador++;
          contadorSpan.textContent = contador;
          actualizarPrecio();
      });
  });

  function actualizarPrecio() {
      let nuevoPrecio = precioBase;

      document.querySelectorAll('.contador-numero').forEach(span => {
          const contador = parseInt(span.textContent);
          const tipo = span.getAttribute('data-tipo');
          nuevoPrecio += contador * incrementValues[tipo];
      });

      // Actualiza todos los elementos con la clase 'precio-todo'
      precioTODOs.forEach(precioElement => {
          precioElement.textContent = nuevoPrecio.toLocaleString() + 'USD';
      });

      console.log(nuevoPrecio)
  }
});

document.getElementById("telefonoInput").addEventListener("input", function(event) {
  const input = event.target;
  const value = input.value;

  // Remover caracteres no numéricos
  const sanitizedValue = value.replace(/\D/g, '');

  // Limitar a 10 cifras
  const limitedValue = sanitizedValue.slice(0, 10);

  // Actualizar el valor del input
  input.value = limitedValue;
});
