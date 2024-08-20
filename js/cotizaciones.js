const divCotizaciones = document.querySelector('#cotizaciones');

fetch('https://dolarapi.com/v1/dolares/oficial')
    .then(response => response.json())
    .then(data => {
        divCotizaciones.innerHTML = `
        <p>(Oficial)</p>
        <span>Compra: $${data.compra}</span>
        <span>Venta: $${data.venta}</span>
        `;
    })