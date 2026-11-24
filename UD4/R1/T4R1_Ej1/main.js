const validarMayus = (string) => {
    const expR = new RegExp(/[A-Z]/);

    let resultado = expR.test(string);

    console.log(resultado)

    return resultado;
}

const validarCaracteresEspeciales = (string) => {
    const expR = new RegExp(/[!@#$%^&]/);

    let resultado = expR.test(string);

    console.log(resultado)

    return resultado;
}


const validarCorreo = (string) => {
    const expR = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    let resultado = expR.test(string);

    console.log(resultado)

    return resultado;
}


(function() {

    validarMayus("holaMundo");

    validarCaracteresEspeciales("hol@");

    validarCorreo("marcos@gmail.com");

})();