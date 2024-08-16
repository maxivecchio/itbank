const divCotizaciones = document.querySelector('#cotizaciones');

fetch('https://dolarapi.com/v1/dolares/blue')
    .then(response => response.json())
    .then(data => {
        divCotizaciones.innerHTML = `
        <span>Compra: $${data.compra}</span>
        <span>Venta: $${data.venta}</span>
        `;
    })