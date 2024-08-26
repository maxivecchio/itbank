const form = document.querySelector('.conversor-form');
const errorP = document.querySelector('#input-conversor-error');

errorP.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const cantidad = formData.get('ingresar-monto');
    const inputResultado = document.querySelector('#resultado');
    /* const valorDolar = 963;
    const resultado = cantidad / valorDolar;
    inputResultado.value = resultado; */

    if (cantidad === '' || isNaN(cantidad) || cantidad <= 0) {
        errorP.style.display = 'block';
        inputResultado.value = '';
        errorP.textContent = 'Por favor, ingrese un número válido';
        return;
    } else {
        errorP.style.display = 'none';
    }

    fetch(`https://dolarapi.com/v1/dolares/oficial`)
        .then(response => response.json())
        .then(data => {
            const resultado = cantidad / data.venta;
            console.log(resultado)
            inputResultado.value = resultado.toFixed(3);
        });
});