document.addEventListener("DOMContentLoaded", () => {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const info = document.querySelector("#infolocated");

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = 'Tú ubicación actual';
        info.innerHTML = `<i class="fa-solid fa-info"><p>Tú ubicación la ocuparemos para mostrar noticias de tú país</p></i>`;
    }

    function error() {
        status.textContent = 'No se aceptaron los permisos';
    }

    if (!navigator.geolocation) {
        status.textContent = 'La Geolocalización no esta disponible en tu navegador';
    } else {
        status.textContent = 'Localizando...';
        navigator.geolocation.getCurrentPosition(success, error);
    }

})
