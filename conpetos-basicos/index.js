// VARIABLES
// var, let, const

const nombre = document.getElementById('diego');
const contenedor = document.getElementById('contenedor');

// keydown
nombre.addEventListener('keyup', (e) => {

    const value = e.target.value;

    contenedor.innerHTML = value;

});

