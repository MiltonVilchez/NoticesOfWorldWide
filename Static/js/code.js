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
  document.getElementById("rutaImagen").src=recipientPhoto;
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.username == undefined) {
    document.getElementById("DivLogIn").classList.remove("divOcultar");
  } else {
    document.getElementById("DivRegister").classList.add("divOcultar");
    document.getElementById("DivLogIn").classList.add("divOcultar");
    document.getElementById("cuenta").classList.remove("divOcultar");
  }
  registrar = () => {
    document.getElementById("DivRegister").classList.remove("divOcultar");
    document.getElementById("DivLogIn").classList.add("divOcultar");
  };
});
