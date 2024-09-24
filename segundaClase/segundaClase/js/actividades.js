//Dado el array = [3,7,11,8,1,4]
let arrayEj= [3,7,11,8,1,4]

//1) Mostrar por pantalla el valor de cada elemento multiplicado por vuestra edad. La edad debe pedirla por una alerta.
let edad = parseInt(prompt("¿Cuál es tu edad?"));
for (let element of arrayEj) {
    console.log(element*edad);
}

arrayEj.forEach(element => {
    console.log(element * edad);
  });


//2) Modificar el valor de cada elemento del array por el resto de dividir cada elemento entre 2.
let newArray = arrayEj.map( (elemento) => elemento % 2 );
console.log(newArray);

//Dado el string = "Jurado, Alberto, Marcelo, Pablo, Maria"
let string= "Jurado, Alberto, Marcelo, Pablo, Maria";

//1) Definir un array en cuya cada posición esté cada nombre del string anterior.
let array2= string.split(", ")
console.log(array2);

//2) Dado el array anterior, mostrar por pantalla en que posición se encuentra la letra a en cada elemento del array.
array2.forEach((nombre, index) => { console.log(`En el nombre ${nombre}, la letra 'a' está en la posición ${parseInt(nombre.indexOf("a")+1)}   `); 

});



//3) Dado el array anterior, cambiar en cada elemento del array anterior la letra a por la e.
let array3=array2.forEach( elemento => {console.log(elemento.toLowerCase().replace(/a/g,"e"))});
console.log(array3);

//4) Crear una función que dado un array devuelva el array al revés (la posición 0 ahora tendrá el valor de la última posición y viceversa). 

let arrayEjemplo = [1, 2, 3, 4, 5];

// Función normal que invierte el array
function invertirArray(array) {
    if (Array.isArray(array)) { // Verifica si el argumento es un array
        return [...array].reverse();  // Invierte el array
    } else {
        console.error("El argumento pasado no es un array válido");
        return [];  // Devuelve un array vacío si no es un array
    }
}

// Función flecha que invierte el array
const invertirArrayFlecha = (array) => {
    if (Array.isArray(array)) { // Verifica si el argumento es un array
        return [...array].reverse(); // Hacemos una copia con [...array] y luego la invertimos
    } else {
        console.error("El argumento pasado no es un array válido");
        return [];  // Devuelve un array vacío si no es un array
    }
};

// Llamadas de ejemplo

// Usando la función normal
let arrayInvertido = invertirArray(arrayEjemplo);
console.log("Array invertido (función normal):", arrayInvertido);

// Usando la función flecha
let arrayInvertidoFlecha = invertirArrayFlecha(arrayEjemplo);
console.log("Array invertido (función flecha):", arrayInvertidoFlecha);
   

//5) Dado el array de nombres, poner cada nombre en mayúsculas y al revés

let nombresInvertidosMayusculas = array2.map(nombre => nombre.toUpperCase().split("").reverse().join(""));
console.log(nombresInvertidosMayusculas);

//1)Crea un array de números de 100 posiciones, que contendrá los números del 1 al 100. Partiendo del array ya creado y completamente relleno, obtener la suma de todos ellos y la media.
let numeros = Array.from({length: 100}, (elemento, i) => i + 1);
let suma = numeros.reduce((res, num) => res + num, 0);
let media = suma / numeros.length;
console.log(`Suma: ${suma}, Media: ${media}`);

//2)Crear un array de enteros donde indicamos por teclado el tamaño del array, rellenamos el array con números aleatorios entre 0 y 9, y mostramos por pantalla el valor de cada posición y la suma de todos los valores.
let tamaño = parseInt(prompt("Introduce el tamaño del array:"));
let arrayAleatorio = Array.from({length: tamaño}, () => Math.floor(Math.random() * 10));
let sumaArrayAleatorio = arrayAleatorio.reduce((sum, num) => sum + num, 0);

console.log(`Array: ${arrayAleatorio}, Suma: ${sumaArrayAleatorio}`);

//3)Leer por alerta  un numero entero y crear un array de ese tamaño, con valores aleatorios entre 1 y 300. A continuación, pedir un número entero entre 0 y 9, e imprimir todas las posiciones del array que tengan un número acabado en ese dígito. Esos números, además de imprimirlos, almacenarlos en un array de salida con el tamaño adecuado.
let tamañoArray = parseInt(prompt("Introduce el tamaño del array:"));
let array300 = Array.from({length: tamañoArray}, () => Math.floor(Math.random() * 300) + 1);
let digito = parseInt(prompt("Introduce un número entre 0 y 9:"));

let salida = array300.filter(num => num % 10 === digito);
console.log(`Números que terminan en ${digito}: ${salida}`);

//4)Introduce por alerta el número de tu DNI, y vuelve a imprimirlo seguido de la letra. Para calcular la letra, cogeremos el resto de dividir nuestro dni entre 23, el resultado debe estar entre 0 y 22. Tendrás que crear un array que contenga (ver imagen):

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
let dni = parseInt(prompt("Introduce tu número de DNI:"));
let letraDNI = letras[dni % 23];
console.log(`Tu DNI completo es: ${dni}-${letraDNI}`);
//1) Define una función que reciba un número n y devuelva si es primo o no

function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
//2) Dado el array [5,1,7,8,2,4,6,3,9], comprueba si hay algún número primo

let arrayPrimos = [5,1,7,8,2,4,6,3,9];
let existePrimo = arrayPrimos.some(esPrimo);
console.log(`¿Hay algún número primo?: ${existePrimo}`);


//3) Dado el array [5,1,7,8,2,4,6,3,9], comprueba si todos son números primos

let todosPrimos = arrayPrimos.every(esPrimo);
console.log(`¿Todos son primos?: ${todosPrimos}`);
//4) Dado el array [5,1,7,8,2,4,6,3,9], comprueba en que posición está el primer número primo

let posicionPrimerPrimo = arrayPrimos.findIndex(esPrimo);
console.log(`La posición del primer número primo es: ${posicionPrimerPrimo+1}`);
//5) Dado el array [5,1,7,8,2,4,6,3,9], comprueba cual es el primer número primo

let primerPrimo = arrayPrimos.find(esPrimo);
console.log(`El primer número primo es: ${primerPrimo}`);
//6) Dado el array [5,1,7,8,2,4,6,3,9], quédate sólo con los números primos
let soloPrimos = arrayPrimos.filter(esPrimo);
console.log(`Los números primos son: ${soloPrimos}`);
//7)  Dado el array de números primos, dame el producto de todos los elementos del array
let productoPrimos = soloPrimos.reduce((sum, num) => sum * num, 1); //Es 1 porque es el primer elemento del producto (multiplicación)
console.log(`El producto de los números primos es: ${productoPrimos}`);

//8)  Define una función que reciba un String y devuelva si es palíndromo o no
function esPalindromo(str) {
    let normalizado = str.replace(/ /g, '').toLowerCase();
    return normalizado === normalizado.split('').reverse().join('');
  }
//9) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba si hay algún palíndromo
let palabras = ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"];
let existePalindromo = palabras.some(esPalindromo);
console.log(`¿Hay algún palíndromo?: ${existePalindromo}`);

//10) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba si todos son palíndromos
let todosPalindromos = palabras.every(esPalindromo);
console.log(`¿Todos son palíndromos?: ${todosPalindromos}`);

//11) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba en que posición está el primer palíndromo
let posicionPrimerPalindromo = palabras.findIndex(esPalindromo);
console.log(`Posición del primer palíndromo: ${posicionPrimerPalindromo+1}`);

//12) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], comprueba cual es el primer palíndromo
let primerPalindromo = palabras.find(esPalindromo);
console.log(`El primer palíndromo es: ${primerPalindromo}`);

//13) Dado el array ["ana", "mesa", "radar","seres","folio","sudoku","amor a roma", "sol", "mar", "oso", "salas"], quédate sólo con los palíndromos
let soloPalindromos = palabras.filter(esPalindromo);
console.log(`Palíndromos: ${soloPalindromos}`);

//14)  Dado el array de números palíndromos, dame la concatenación de todos los elementos del array
let concatenacionPalindromos = soloPalindromos.join('');
console.log(`Concatenación de palíndromos: ${concatenacionPalindromos}`);

//Otros:
//1) Dado un array de números, verifica si hay algún número negativo
let numerosArray = [3, -2, 5, 6];
let existeNegativo = numerosArray.some(num => num < 0);
console.log(`¿Hay algún número negativo?: ${existeNegativo}`);

//2) Dado un array de Strings, encuentra el índice del primer String que empiece por la letra 'A'
let stringsArray = ["Perro", "Gato", "Alce", "Elefante"];
let indiceLetraA = stringsArray.findIndex(str => str.startsWith('A'));
console.log(`El índice del primer string que empieza con 'A' es: ${indiceLetraA+1}`);

//3) Dado un array de números de 3 o más cifras, calcula la suma de las últimas cifras de cada número
let numerosGrandes = [123, 456, 789, 101];
let sumaUltimasCifras = numerosGrandes.reduce((sum, num) => sum + (num % 10), 0);
console.log(`Suma de las últimas cifras: ${sumaUltimasCifras}`);

//4) Dado un array de arrays, filtra el array para que sólo queden los arrays de longitud 5
let arraysDeArrays = [[1,2,3,4,5], [6,7,8], [9,10,11,12,13], [14,15]];
let arraysLongitud5 = arraysDeArrays.filter(arr => arr.length === 5);
console.log(arraysLongitud5);

//5) Dado un array de Strings, encuentra el primer string de longitud 3
let strings = ["uno", "dos", "tres", "cuatro"];
let primerStringLongitud3 = strings.find(str => str.length === 3);
console.log(`El primer string de longitud 3 es: ${primerStringLongitud3}`);

//6) Dado un array de números, verifica que todos los números sean de 2 cifras o más
let numerosDosCifras = [10, 25, 99, 100];
let todosDosCifras = numerosDosCifras.every(num => num >= 10 && num <= 99);
console.log(`¿Todos tienen 2 cifras?: ${todosDosCifras}`);