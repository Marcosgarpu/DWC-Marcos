// 1. Números aleatorios
function numeroAleatorio01() {
    return Math.random().toFixed(2); // número entre 0 y 1
}

function numeroAleatorioRango(min, max) {
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 2. Seno, coseno y tangente de un ángulo
function calcularTrigonometria(angulo) {
    let radianes = angulo * Math.PI / 180;
    return {
        seno: Math.sin(radianes),
        coseno: Math.cos(radianes),
        tangente: Math.tan(radianes)
    };
}

// 3. Hipotenusa de un triángulo rectángulo
function calcularHipotenusa(cateto1, cateto2) {
    return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
}

// 5. Ecuación de segundo grado
function resolverEcuacion(a, b, c) {
    let discriminante = Math.pow(b, 2) - (4 * a * c);

    if (discriminante < 0) {
        return "La ecuación no tiene soluciones reales.";
    }

    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

    return "Las soluciones son: x1 = " + x1 + " y x2 = " + x2;
}

// 6. Potencias
function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
}

// 7. Tabla de números y sus senos
function generarTablaSeno(cantidad) {
    let filas = "";
    for (let i = 1; i <= cantidad; i++) {
        filas += "<tr><td>" + i + "</td><td>" + Math.sin(i) + "</td></tr>";
    }
    return filas;
}

// 8. Imagen aleatoria entre 3
function obtenerImagenAleatoria(imagenes) {
    let indice = Math.floor(Math.random() * imagenes.length);
    return imagenes[indice];
}