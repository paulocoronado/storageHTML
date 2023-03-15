


//EventListeners

const btnGuardar = document.getElementById('btnAlmacenar');

btnGuardar.addEventListener('click', () => {

sessionStorage.setItem('nombre', 'paulo');
sessionStorage.setItem('apellido', 'coronado');

let nombre = sessionStorage.getItem('nombre');
console.log(nombre);


localStorage.setItem('nombre', 'paulo');
localStorage.setItem('apellido', 'coronado');

nombre = localStorage.getItem('nombre');
console.log(nombre);
});


const btnBorrar = document.getElementById('btnBorrar');

btnBorrar.addEventListener('click', () => {
    localStorage.clear();
    sessionStorage.clear();
});