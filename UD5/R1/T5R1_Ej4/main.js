import { arrArticulos } from "./modulos/articulos.mjs";

function crearElemento(etiqueta, texto, clase) {
    let elemento = document.createElement(etiqueta);
    elemento.textContent = texto;
    elemento.className = clase;
    return elemento;
}

(function () {

    // Enlazar el CSS con DOM
    let enlaceCss = document.createElement("link");
    enlaceCss.rel = "stylesheet";
    enlaceCss.href = "estilos.css";
    document.head.appendChild(enlaceCss);

    let contenedor = document.getElementById("articulos");
    contenedor.className = "contenedor";

    for (let i = 0; i < arrArticulos.length; i++) {
        let articulo = arrArticulos[i];

        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";

        let imagen = document.createElement("img");
        imagen.src = articulo.image;
        imagen.alt = articulo.title;
        imagen.className = "imagen";

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(crearElemento("span", articulo.category, "categoria"));
        tarjeta.appendChild(crearElemento("h2", articulo.title, "titulo"));
        tarjeta.appendChild(crearElemento("p", articulo.price.toFixed(2) + " $", "precio"));
        tarjeta.appendChild(crearElemento("p", articulo.description, "descripcion"));
        tarjeta.appendChild(crearElemento("p", "★ " + articulo.rating.rate +
            " (" + articulo.rating.count + " votos)", "valoracion"));

        contenedor.appendChild(tarjeta);
    }

})();