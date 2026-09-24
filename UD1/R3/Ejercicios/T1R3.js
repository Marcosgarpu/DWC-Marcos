// 1. The Age Calculator
function ageCalculator() {
    var currentYear = new Date().getFullYear();
    var birthYear = parseInt(prompt("Introduce el año de nacimiento:"));

    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;

    document.write("Tiene " + age1 + " o " + age2 + " años<br>");
}

// 2. The Lifetime Supply Calculator
function supplyCalculator() {
    var currentAge = parseInt(prompt("Introduce tu edad actual:"));
    var maxAge = parseInt(prompt("Introduce la edad máxima estimada:"));
    var amountPerDay = parseFloat(prompt("Introduce la cantidad estimada por día:"));

    var yearsLeft = maxAge - currentAge;
    var daysLeft = yearsLeft * 365;
    var total = daysLeft * amountPerDay;

    document.write("Necesitarás " + total + " para llegar hasta la edad de " + maxAge + " años<br>");
}

// 3. The Geometrizer
function circumference(radio) {
    var resultado = 2 * Math.PI * radius;

    return resultado;
}

function area(radio) {
    var resultado = Math.PI * radius * radius;

    return resultado;
}

// 4. The Temperature Converter
function convertTemperature() {
    var celsius = parseFloat(prompt("Introduce una temperatura en Celsius:"));
    var fahrenheit = celsius * 9 / 5 + 32;
    document.write(celsius + "°C es " + fahrenheit + "°F<br>");

    var fahrenheitInput = parseFloat(prompt("Introduce una temperatura en Fahrenheit:"));
    var resultadoCelsius = (fahrenheitInput - 32) * 5 / 9;
    document.write(fahrenheitInput + "°F es " + resultadoCelsius + "°C.<br>");
}