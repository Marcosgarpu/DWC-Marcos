import db from "../data/recetas_daw.json" with { type: "json" };

const fBuscaReceta = ()=>{
    const textoBuscar = document.getElementById("buscar").value.toLowerCase();

    const resultado = db.recetas.filter( receta => 
        receta.nombre.toLowerCase().includes(textoBuscar)
    );

    listarRecetas(resultado);

}

const botonBuscar = ()=>{
    const btn = document.getElementById("enviar");

    btn.addEventListener("click", fBuscaReceta);
}


const listarRecetas = (arRecetas) => {
    
    let divPrincipal = document.querySelector(".flexbox");

    divPrincipal.innerHTML = "";   // limpia los resultados anteriores

    arRecetas.forEach(receta => {
        let div = document.createElement("div");
        div.innerHTML = listarReceta(receta);
        divPrincipal.appendChild(div);
    });

    
}

const listarReceta = (receta) => {
    return `
            <p>${receta.nombre}</p>
            <p>${receta.descripcion}</p>
            <p>${receta.categoria}</p>
            <p>${receta.tiempoTotal}</p>
            <p>${receta.valoracion}</p>
     `;
}

(function () {

    listarRecetas(db.recetas);
    botonBuscar();

})();