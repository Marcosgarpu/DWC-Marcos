(function () {

    // let enlaces = document.getElementsByTagName("a");
    let enlaces = document.querySelectorAll("a");

    // 1. Número de enlaces 
    console.log("Número de enlaces totales: ", enlaces.length);

    // 2. Penúltimo enlace 
    console.log("Penúltimo enlace: ", enlaces[enlaces.length - 2].href);

    // 3. Enlaces a Google
    let contGoogle = 0;
    enlaces.forEach(element => {
        if (element.href.includes("google")) {
            contGoogle++;
        }
    });
    console.log("Enlace a Google", contGoogle);

    // 4. Enlaces del tercer párrafo
    let parrafos = document.getElementsByTagName("p");
    console.log("Número de enlaces del tercer párrafo: ", parrafos[2].getElementsByTagName("a"));

})()