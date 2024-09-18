// VARIABLES
// var, let, const

const nombre = document.getElementById('mishelle');

// keydown
nombre.addEventListener('keyup', (e) => {

    const value = e.target.value;
    document.getElementById('content').innerHTML = value;


});


console.log(nombre);
