/*var pruebavar = "pruebavar";

pruebavar = "pruebavar2";

console.log(pruebavar);
let pruebalet = "pruebalet";

pruebalet = "pruebalet22";
console.log(pruebalet);

const pruebaconst = "1992";

console.log(pruebaconst);

//-- ejercicio arrow

const triple = x => x * 3;

console.log(triple(10));

const isNatural = num => Number.isInteger(num) && num > 0 && num < 10;

console.log(isNatural(2));

const average = (notes = []) => notes.reduce((a, b) => a + b, 0) / notes.length;

console.log(average());

//----

const displaMessageEverySecond = message => {
  this.customMessage = "You are inside a crazy universe";

  setTimeout(() => {
    console.log(this.customMessage);
    console.log(message);
  }, 1000);
};
console.log(displaMessageEverySecond);


///-- otra prueba
const createPerson = personas => [(name: name), (edad: edad)];

const getNames = (students = []) => students.map(students => students.map);

// 3. Function Default Parameters 🚑

// Convertí la siguientes funcines a arrow function y definile los parametros por defecto

const squareRoot = (base = "") => Math.sqrt(base);

const dogAge = (humanAge = "") => humanAge * 7;

const isLoremIpsum = (text = "") => text.includes("lorem");

const onlyIntegers = (numbers = []) =>
  numbers.filter(number => Number.isInteger(number));

//--- como pasar por todo el array con for y luego con map

for (let i = 0; i > numeros.lenght; i++) {
    const numero = numeros[i]
    dobledenumeros.push(numero * 2);
}

const numeros = [-1, 2, 3, 4];
const dobledenumero = numeros.map(function(numero) {
  return numero * 2;
});
console.log(numeros);
console.log(dobledenumero);


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
  "Diqaz Quiroga, Priscila Mabel",
  "Santi, Martin",
  "Morales, Judith",
  "Romano, Martín"
];

const dobleDeNumeros = numeros.map(num => num * 2)

console.log(numeros)

console.log(dobleDeNumeros)

const alumnosLi = alumnos.map(alumno => `<li>${alumno}</li>`)

document.getElementById("logo")
document.getElementsByClassName("alumnos")
document.getElementsByTagName("h2")

document.querySelector("#logo")
document.querySelectorAll("li.alumno")
document.querySelector("h2")

$('.alumnos').innerHTML = alumnosLi.join('')




const numerosNegativos = numeros.filter(numero => numero > 0);
console.log(numerosNegativos);

const numeros = [-1, 20, -100, -1000, 2, , 3, 4];
const sumaTotal = numeros.reduce((total, siguiente) => {
  console.log(total, "+", siguiente);
  return total + siguiente;
}, 0);

console.log(sumaTotal);
*/

const matematicos = [
  {
    firstName: "Isaac",
    lastName: "Newton",
    bornYear: 1643,
    passedYear: 1727
  },
  {
    firstName: "Carl",
    lastName: "Gauss",
    bornYear: 1777,
    passedYear: 1855
  },
  {
    firstName: "Leonhard",
    lastName: "Euler",
    bornYear: 1707,
    passedYear: 1783
  },
  {
    firstName: "René",
    lastName: "Descartes",
    bornYear: 1596,
    passedYear: 1650
  }
];
/*
const numerosNegativos = numeros.filter(numero => numero > 0);
console.log(numerosNegativos);

const onlyIntegers = (numbers = []) =>   numbers.filter(number => Number.isInteger(number));
  
  const alumnosLi = alumnos.map(alumno => `<li>${alumno}</li>`)
  const getNames = (students = []) => students.map(students => students.map);*/

//const anio = matematicos.map(matematico => matematico.bornYear).filter(anio=> anio < 1700)
// =============================================================================
// Filtrar todos los matemáticos que nacieron en el 1500
const nacieron1500 = matematicos.filter(
  matematico => matematico.bornYear === 1500
);

// =============================================================================
// Queremos un array nuevo solamente con los nombres y apellidos

const nombreyapp = matematicos.map(
  matematico => (matematico = [matematico.firstName, matematico.lastName])
);

// =============================================================================
// Ordenar los matematicos por fecha de nacimiento, del más viejo al más joven

// =============================================================================
// Cuantos años vivieron todos los matematicos ?

// =============================================================================
// Hay algún matemático de apellido Einstein en nuestra lista ?
