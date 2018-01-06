var pruebavar = "pruebavar";

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

const average = notes => notes.reduce((a, b) => a + b, 0) / notes.length;

console.log(average([7, 3, 6]));

//----

const displaMessageEverySecond = message => {
  this.customMessage = "You are inside a crazy universe";

  setTimeout(() => {
    console.log(this.customMessage);
    console.log(message);
  }, 1000);
};
console.log(displaMessageEverySecond);
