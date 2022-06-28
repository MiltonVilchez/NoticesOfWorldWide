navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then((stream) => {
    console.log(stream);

    let video = document.getElementById('video');

    video.srcObject = stream;

    video.onloadedmetadata = (ev) => video.play();

}).catch((err) =>
    alert("Para tomar una foto debes darle permisos a la camara")
)

let videon = document.getElementById("video");

function pausePhoto() {
    videon.pause();
}