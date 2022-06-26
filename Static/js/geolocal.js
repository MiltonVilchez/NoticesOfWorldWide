document.addEventListener("DOMContentLoaded", () => {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const info = document.querySelector("#infolocated");

    mapLink.href = '';
    mapLink.textContent = '';
    status.textContent = '';

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = 'Tú ubicación actual';
        info.innerHTML = `<i class="fa-solid fa-circle-info"></i> Tú ubicación la ocuparemos para mostrar noticias de tú país`;
        localStorage.setItem('Ubicacion', 'NombrePais');
        document.getElementById('pointLocated').innerHTML = '<i class="fa-solid fa-location-pin"></i> ' + localStorage.getItem('Ubicacion'); 
    }

    function error() {
        status.textContent = 'No se aceptaron los permisos';
        localStorage.setItem('Ubicacion', 'Mundo');
        document.getElementById('pointLocated').innerHTML = '<i class="fa-solid fa-location-pin"></i> ' + localStorage.getItem('Ubicacion'); 
    }

    if (!navigator.geolocation) {
        status.textContent = 'La Geolocalización no esta disponible en tu navegador';
    } else {
        status.textContent = 'Localizando...';
        document.getElementById('pointLocated').innerHTML = '<i class="fa-solid fa-location-pin"></i> Localizando';
        navigator.geolocation.getCurrentPosition(success, error);
    }

})
