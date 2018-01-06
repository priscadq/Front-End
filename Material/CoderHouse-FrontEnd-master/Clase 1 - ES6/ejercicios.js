// 1. Let y Const son el nuevo var 📦

// Re-definí de manera correcta las siguientes variables usando let y const
let age = 32;

const dni = "36.104.956";

let price = 12932;

const serialNumber = "C02SM33ZGTFL";

let api = "https://archillect-api.now.sh/visuals";

let jobTitle = "Junior Front-end Developer";

const bornDate = "29/06/92";

let album = "The Miseducation of Lauryn Hill";

const apiKey = "6c84fb90-12c4-11e1-840d-7b25c5ee775a";

let company = "Coca-Cola";

let childs = ["Timmy", "Jimmy", "Kimmy"]; //podria morir uno, no?

let productInfo = {
  brand: "LG",
  model: "27UD58-B",
  resolution: "4K"
};

// 2. Arrow Functions 🏹

// Re-definí las siguientes funciones de ES5 a arrow functions de ES6
function triple(x) {
  return x * 3;
}

function isNatural(num) {
  return Number.isInteger(num) && num > 0 && num < 10;
}

function average(notes) {
  return notes.reduce((a, b) => a + b, 0) / notes.length;
}

average([7, 4, 7, 9, 6, 5, 8]);

isNatural(4);

// Solucionar el problema siguiente usando arrow  function donde sea necesario
function displaMessageEverySecond(message) {
  this.customMessage = "You are inside a crazy universe";

  setTimeout(function() {
    console.log(this.customMessage);
    console.log(message);
  }, 1000);
}

displaMessageEverySecond("holaa"); //?

// 3. Function Default Parameters 🚑

// Convertí la siguientes funcines a arrow function y definile los parametros por defecto
function squareRoot(base) {
  return Math.sqrt(base);
}

function dogAge(humanAge) {
  return humanAge * 7;
}

function isLoremIpsum(text) {
  return text.includes("lorem");
}

function onlyIntegers(numbers) {
  return numbers.filter(number => Number.isInteger(number));
}

// 4. Destructuring objects and arrays ፨

// Extrae los valores "lugar" y "direccion"
const cursoFrontEnd = {
  id: "2735",
  cantidadClases: 5,
  lugar: "Urban Station",
  direccion: "El Salvador 4577",
  profesor: "Leonardo Galante"
};

// Extrae los primeros 3 nombres de la lista de alumnos
const alumnos = [
  "Quiroga, Mario",
  "Alvarez, Jesus",
  "Assefi, Ershad",
  "Fernandez Rial, Maria Sol",
  "Fiz, Mercedes Maria",
  "Forti, Diego Rolando",
  "Marmolini López, Daniela Paula",
  "Molina, Mateo",
  "Perez Cobo, Francisco",
  "Quevedo, Agustín",
  "Quiroga, Priscila Mabel Diaz Quiroga",
  "Santi, Martin",
  "Morales, Judith",
  "Romano, Martín"
];

// Usa destructuring en la siguiente función para obtener la propiedad cantidadClases
const totalHours = cantidadClases => cantidadClases * 7;

// totalHours(cursoFrontEnd) //?

// 5. Array methods: Map, filter and reduce 🔑

// Map: Usando el array alumnos obtener un nuevo array con solo los apellidos

// Filter: Del array de apellidos filrar solo aquellos que tengan 6 o menos caracteres

// Reduce: Obtener un solo string con todos los apellidos separados por una coma

// 6. Spread Operator ⊙

/*
  Generar un array nuevo que tenga todos los alumnos del array "alumnos"
  y al final el nombre del profesor y de los alumnos que no esten en la lista
*/

/*
  Generar un objeto nuevo llamado cursoFrontEndPro con las mismas propiedades
  que el objeto cursoFrontEnd pero con las propiedad "codingBootcamp" y el valor "CoderHouse"
*/

// 7. Object property shorthand 🤝

/*
  Definí una variable "rooms" y asignale 3, y otra variable "baths" y asignale 2
  Ahora genera un objeto y definile las propiedades "rooms" y "baths" asignandole
  las variables antes definidas usando Object property shorthand
*/

// 8. Template Literals ✏️

/*
  Crear una función mensajeEdad que pasandole como parámetro "name" y "age"
  devuelva un string que diga por ejemplo "Alberto tiene 32 años"
*/

/*
  Crear otra función mensajeBienvenida que pasandole como parámetro "name" y "course"
  devuelva un string que diga por ejemplo "Bienvenido Alberto al curso de Front-end!"
*/

// 9. Classes or Class 🏛

/*
  Definir una clase Student que al generar una instancia de esta
  reciba en su constructor name (string), course (string), notes (array de notas)
  y tiene definido 4 métodos,
    * average: devuelve el promedio de las notas
    * highest: devuelve la nota más alta
    * lowest: devuelve la nota más baja
    * addNote: nos permite agregar una nota nueva, sin modificar el array original
*/
