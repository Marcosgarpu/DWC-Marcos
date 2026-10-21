/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número
 * x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 * filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */
function filterNumbersGreaterThan(numbers, filter) {
    const resultado = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < filter) {
            resultado.push(numbers[i]);
        }
    }
    return resultado;
}

/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que
 * transformar las "a" en 4, las "e" en 3, las "i" en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text
 * @returns {String} - El texto convertido a "Hacker Speak"
 *
 * @example
 * toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ck3r n0w"
 */
function toHackerSpeak(text) {
    let resultado = "";
    for (let i = 0; i < text.length; i++) {
        const letra = text[i].toLowerCase();
        if (letra === "a") {
            resultado += "4";
        } else if (letra === "e") {
            resultado += "3";
        } else if (letra === "i") {
            resultado += "1";
        } else if (letra === "o") {
            resultado += "0";
        } else if (letra === "s") {
            resultado += "5";
        } else {
            resultado += text[i];
        }
    }
    return resultado;
}

/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión
 * @returns {String} - La extensión del archivo
 *
 * @example
 * getFileExtension("imagen.jpg") // returns "jpg"
 */
function getFileExtension(file) {
    const posicionPunto = file.lastIndexOf(".");
    if (posicionPunto === -1) {
        return "";
    }
    return file.substring(posicionPunto + 1);
}

/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems
 *
 * @param {[][]} arr - Array 2D a "aplanar"
 * @returns {[]} - El array "aplanado"
 *
 * @example
 * flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 4, 3, 10, 2, 5]
 */
function flatArray(arr) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            resultado.push(arr[i][j]);
        }
    }
    return resultado;
}

/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 *
 * @example
 * removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */
function removeDuplicates(arr) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (resultado.indexOf(arr[i]) === -1) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 *
 * @example
 * countLetter("a", "javascript") // returns 2
 */
function countLetter(letter, text) {
    let contador = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === letter.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el
 * string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 *
 * @example
 * removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */
function removeWords(str, words) {
    const palabras = str.split(" ");
    const resultado = [];
    for (let i = 0; i < palabras.length; i++) {
        if (words.indexOf(palabras[i]) === -1) {
            resultado.push(palabras[i]);
        }
    }
    return resultado.join(" ");
}