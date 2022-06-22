document.addEventListener("DOMContentLoaded", () => {
  let date = new Date();
  const DiasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  const monthName = date.toLocaleString('us-US', { month: 'long' });
  const dayNumber = date.toLocaleString('us-US', { day: 'numeric' });
  const yearNumber = date.toLocaleString('us-US', { year: 'numeric' });
  const dayName = DiasSemana[date.getDay()];
  let FullDate = dayName + " " + dayNumber + " de " + monthName + ", " + yearNumber;
  document.getElementById("FullDay").innerHTML = FullDate;
  
  if (localStorage.getItem('TipoUsuario') == 'Periodista'){
    document.getElementById("publicarNoticia").classList.remove('divOcultar');
    document.getElementById("DiUsername").innerHTML = "Hola periodista, " + localStorage.getItem('username');
  }
});

function registrar() {
  document.getElementById("DivRegister").classList.remove("divOcultar");
  document.getElementById("DivLogIn").classList.add("divOcultar");
}

function iniciaSesion() {
  //Guardar la cookie Milton(Administrador) para la vista del periodista
  let username = document.getElementById("username").value;
  // let passwordUser = document.getElementById("passwordUser").value;
  localStorage.setItem('username', username);
  if (username === 'MiltonV') {
    localStorage.setItem('TipoUsuario', 'Periodista');
    window.location.replace('/NoticesOfWorldWide/Templates/agregaNoticia.html');
  } else {
    localStorage.setItem('TipoUsuario', 'Comun');
    window.location.replace('/NoticesOfWorldWide/Templates/');
  }
}

function seeAddNotice(){
  document.getElementById("seeAddNotice").classList.toggle('divOcultar');
  document.getElementById("seeAddNotice").classList.add('animate__fadeIn');
  
  
}

const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", (event) => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute("data-bs-whatever");
  const recipientPhoto = button.getAttribute("data-foto");
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector(".modal-title");

  modalTitle.textContent = recipient;
  document.getElementById("rutaImagen").src = recipientPhoto;
});