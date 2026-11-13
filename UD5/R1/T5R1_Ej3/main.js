import { arrArticulos } from "./modulos/articulos.mjs";

(function () {

    let contenedor = document.getElementById("articulos");

    function crearElemento(etiqueta, texto) {
        let elemento = document.createElement(etiqueta);
        elemento.textContent = texto;
        return elemento;
    }

    for (let i = 0; i < arrArticulos.length; i++) {
        let articulo = arrArticulos[i];

        let tarjeta = document.createElement("div");

        let imagen = document.createElement("img");
        imagen.src = articulo.image;
        imagen.alt = articulo.title;
        imagen.width = 150;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(crearElemento("h2", articulo.title));
        tarjeta.appendChild(crearElemento("p", "Categoría: " + articulo.category));
        tarjeta.appendChild(crearElemento("p", "Precio: " + articulo.price.toFixed(2) + " $"));
        tarjeta.appendChild(crearElemento("p", articulo.description));
        tarjeta.appendChild(crearElemento("p", "Valoración: " + articulo.rating.rate +
            " (" + articulo.rating.count + " votos)"));
        tarjeta.appendChild(document.createElement("hr"));

        contenedor.appendChild(tarjeta);
    }

})();