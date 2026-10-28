// ===== Ejercicio 1: transformar a funciones arrow =====

// 1.a) sum
const sum = (num1, num2) => num1 + num2;
console.log(sum(40, 2)); // 42
console.log(sum(42, 0)); // 42

// 1.b) stringLength (solo muestra por consola)
const stringLength = str => console.log(`the length of "${str}" is:`, str.length);

const longestCityNameInTheWorld =
  "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";
stringLength(longestCityNameInTheWorld);

// 1.c) stringLength (versión que además devuelve la longitud)
// Se llama stringLengthReturn porque una constante no puede declararse dos veces
// con el mismo nombre (en el original la segunda function pisaba a la primera).
const stringLengthReturn = str => {
  const length = str.length;
  console.log(`the length of "${str}" is:`, length);
  return length;
};
console.log(stringLengthReturn("willynilly"));

// 1.d) showAlert
const alerts = [
  "Hey, you are awesome",
  "You are so wonderful",
  "What a marvel you are",
  "You're so lovely",
  "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"
];
const showAlert = name =>
  alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
showAlert("you ball of fluff");

// ===== Ejercicio 2: saludo =====
const greeting = (name, age) => `Hello, I am ${name}, and I am ${age} years old.`;
console.log(greeting("Ana", 25));

// ===== Ejercicio 3: suma de un array con reduce =====
const sumArray = arr => arr.reduce((acc, n) => acc + n, 0);
console.log(sumArray([1, 2, 3, 4, 5]));

// ===== Ejercicio 4: la función arrow más corta posible =====
let eye = "eye";
const fire = () => `bulls-`;
console.log(fire());
// Versión equivalente aún más corta (comillas normales, sin template string):
// const fire = () => "bulls-";
// Si la intención era devolver "bulls-eye":
// const fire = () => `bulls-${eye}`;

// ===== Ejercicio 9: fibonacci ES5 -> arrow =====
const fibonacci = n => (n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
