document.getElementById('Creditos').addEventListener('click', function() {
  alert('Autor: Martin Ferreiro Garcia\nCurso y Grupo: 2bach C');
});
document.getElementById('MostrarSeccion').addEventListener('click', function() {
  var bloque1 = document.querySelector('.bloque1');
  bloque1.style.display = 'block';
});

document.getElementById('OcultarSeccion').addEventListener('click', function() {
  var bloque1 = document.querySelector('.bloque1');
  bloque1.style.display = 'none';
});

document.getElementById('CambiarColor').addEventListener('click', function() {
  var bloque1 = document.querySelector('.bloque1');
  bloque1.style.backgroundColor = getRandomColor();
});

document.getElementById('ObtenerUbicacion').addEventListener('click', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("La geolocalización no es compatible con este navegador.");
  }
});

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var ubicacionDiv = document.createElement('div');
  ubicacionDiv.innerHTML = "Latitud: " + latitude + ", Longitud: " + longitude;
  document.body.insertBefore(ubicacionDiv, document.querySelector('.bloque3'));
  initMap(latitude, longitude);
}

function initMap(latitude, longitude) {
  var map = L.map('map').setView([latitude, longitude], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  L.marker([latitude, longitude]).addTo(map)
    .bindPopup('¡Estás aquí!')
    .openPopup();
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function fecha() {
  alert(new Date);
}

document.getElementById('bloque2').addEventListener('mouseover', function() {
  this.style.backgroundColor = 'orange';
});

document.getElementById('bloque2').addEventListener('mouseout', function() {
  this.style.backgroundColor = 'silver';
});

function Cambiocolor() {
  document.getElementById('bloque2').style.BackgroundColor("Green");
}