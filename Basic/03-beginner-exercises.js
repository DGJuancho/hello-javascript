/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
//  Este es un comentario de una sola línea.

// 2. Escribe un comentario en varias líneas
/*
    Este es
    un comentario
    de varias lineas.
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let alias = "DG Juancho";
let age = 46;
let height = 1.78;
let isDesigner = true;
let isDeveloper = false;
let sex;
let couple = null;
let mySymbol = Symbol("Dragon&Tiger");
let dudes = BigInt(68438431854613541531354684534843);

// 4. Imprime por consola el valor de todas las variables
console.log(alias);
console.log(age);
console.log(height);
console.log(isDesigner);
console.log(isDeveloper);
console.log(sex);
console.log(couple);
console.log(mySymbol);
console.log(dudes);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof alias);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isDesigner);
console.log(typeof isDeveloper);
console.log(typeof sex);
console.log(typeof couple);
console.log(typeof mySymbol);
console.log(typeof dudes);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
alias = "Juancho";
age = 50;
height = 1.8;
isDesigner = false;
isDeveloper = true;
mySymbol = Symbol(69);
dudes = 98765134946131n;

console.log(alias);
console.log(age);
console.log(height);
console.log(isDesigner);
console.log(isDeveloper);
console.log(mySymbol);
console.log(dudes);

console.log(typeof alias);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isDesigner);
console.log(typeof isDeveloper);
console.log(typeof mySymbol);
console.log(typeof dudes);
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
alias = 456;
age = "Juan";
height = "Núñez";
isDesigner = "Si";
isDeveloper = "No";
mySymbol = null;
dudes = true;

console.log(alias);
console.log(age);
console.log(height);
console.log(isDesigner);
console.log(isDeveloper);
console.log(mySymbol);
console.log(dudes);

console.log(typeof alias);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isDesigner);
console.log(typeof isDeveloper);
console.log(typeof mySymbol);
console.log(typeof dudes);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const purpose = "Aprender";
const percentage = 100;
const obstacles = true;
// const goals =
const knowledge = null;
const proyect = Symbol("Loquesea");
const desire = 381268318268465464313351372264n;

console.log(purpose);
console.log(percentage);
console.log(obstacles);
// console.log(goals);
console.log(knowledge);
console.log(proyect);
console.log(desire);

// 9. A continuación, modifica los valores de las constantes
// purpose = "Estudiar";
// percentage = "75";
// obstacles = true;
// proyect = Symbol("Algunos");
// desire = BigInt(35143843546243541);

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
