const form = document.querySelector('.conversor-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const cantidad = formData.get('ingresar-monto');
    const inputResultado = document.querySelector('#resultado');
    fetch(`https://dolarapi.com/v1/dolares/oficial`)
        .then(response => response.json())
        .then(data => {
            const resultado = cantidad / data.compra;
            console.log(resultado)
            inputResultado.value = resultado;
        });
});