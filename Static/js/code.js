document.addEventListener("DOMContentLoaded",() => {
    if(localStorage.username == undefined){
        document.getElementById("DivLogIn").classList.remove("divOcultar");
    }else{
        document.getElementById("DivRegister").classList.add("divOcultar");
        document.getElementById("DivLogIn").classList.add("divOcultar");
        document.getElementById("cuenta").classList.remove("divOcultar");
    }
    registrar = () => {
        document.getElementById("DivRegister").classList.remove("divOcultar");
        document.getElementById("DivLogIn").classList.add("divOcultar");
    }
});