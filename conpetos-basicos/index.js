// VARIABLES
// var, let, const

const nombre = document.getElementById('mishelle');

// onChange
nombre.addEventListener('change', (e) => {

    const value = e.target.value;

    console.log(value);

    document.getElementById('content').innerHTML = value;

});

console.log(nombre);
