const divCotizaciones = document.querySelector('#cotizaciones');

fetch('https://dolarapi.com/v1/dolares/oficial')
    .then(response => response.json())
    .then(data => {
        divCotizaciones.innerHTML = `
        <div><span>Compra</span><span class="cotizacion_numero">$${data.compra}</span></div>
        <div><span>Venta</span> <span class="cotizacion_numero">$${data.venta}</span></div>
        `;
    })