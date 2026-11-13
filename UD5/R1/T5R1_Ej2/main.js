(function () {

    let personas = [
        { codigo: 1, dni: "4455544X", Nombre: "Juan López López", edad: 18 },
        { codigo: 2, dni: "7778888X", Nombre: "Luis Mateo López", edad: 25 },
        { codigo: 3, dni: "6654545M", Nombre: "Pedro Guitierrez López", edad: 41 },
        { codigo: 4, dni: "9998897X", Nombre: "María Guitierrez López", edad: 32 }
    ];

    let contenedor = document.getElementById("contenedor");

    let tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.setAttribute("cellpadding", "8");

    // Cabecera
    let thead = document.createElement("thead");
    let filaCabecera = document.createElement("tr");
    let titulos = ["Código", "DNI", "Nombre", "Edad"];

    for (let i = 0; i < titulos.length; i++) {
        let th = document.createElement("th");
        th.textContent = titulos[i];
        filaCabecera.appendChild(th);
    }
    thead.appendChild(filaCabecera);
    tabla.appendChild(thead);

    // Cuerpo
    let tbody = document.createElement("tbody");

    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];
        let fila = document.createElement("tr");

        let valores = [persona.codigo, persona.dni, persona.Nombre, persona.edad];

        for (let j = 0; j < valores.length; j++) {
            let td = document.createElement("td");
            td.textContent = valores[j];
            fila.appendChild(td);
        }

        tbody.appendChild(fila);
    }

    tabla.appendChild(tbody);
    contenedor.appendChild(tabla);

})();