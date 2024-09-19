//1. Pide por pop-up la altura y el peso y almacénalo cada uno en una variable.
let altura = parseFloat(prompt("Introduce tu altura (en metros):"));

let altura2 = Number.parseInt(prompt("Introduce tu altura (en metros):"));
let peso = parseFloat(prompt("Introduce tu peso (en kilogramos):"));
let peso2 = Number.parseInt(prompt("Introduce tu altura (en metros):"));
//2. Imprime por pantalla la suma de ambas variables.
console.log("La suma de tu altura y peso es: " + (altura + peso));
alert("La suma de tu altura y peso es: " + (altura + peso));

//3. Pide por pop-up la edad y almacénala en una variable.
let edad = parseInt(prompt("Introduce tu edad:"));

//4. Define una variable con un operador ternario que sea true si la edad es mayor que 18 o false si es menor.
let esMayorDeEdad = (edad > 18) ? true : false;
let esMayorDeEdad2 = edad > 18 ? true : false;
console.log("¿Es mayor de edad?: " + esMayorDeEdad);

//5. Crea un bucle que sume los primeros 5 números pares entre 50 y 70. Haz esto de 3 maneras distintas.
// Manera 1: Bucle 'for'
let sumaPares1 = 0;
let contador= 0;
for (let i = 50; i <= 70; i += 2) {
    sumaPares1 += i;
    contador++;
        if(contador === 5){
            break;
        }
}
console.log("Suma de los primeros 5 números pares (for): " + sumaPares1);


let c=0;
for (let i = 50; i <= 70; i += 2) {
    console.log(i)
    c++;
        if(contador === 5) break;
        
}

//manera 1 en clase
let res1=0
let i=50
for(let c=0; c<5; c++){
    console.log(i)
    res1+=i
    i+=2
}

// Manera 2: Bucle 'while'.
let sumaPares2 = 0;
let num = 50;
let count = 0;
while (count < 5) {
    sumaPares2 += num;
    num += 2;
    count++;
}
console.log("Suma de los primeros 5 números pares (while): " + sumaPares2);

// Manera 3: Bucle 'do...while'
let sumaPares3 = 0;
let num2 = 50;
let contador3 = 0;
do {
    sumaPares3 += num2;
    num2 += 2;
    contador3++;
} while (contador3 < 5);
console.log("Suma de los primeros 5 números pares (do...while): " + sumaPares3);

//6. Pide por pop-up un nombre y almacénalo en una variable.
let nombre = prompt("Introduce tu nombre:");

//7. Comprueba si el nombre contiene la palabra malsonante "Mierda".
let comprobacion= nombre.includes("Mierda");
console.log(comprobacion);
//8. En caso de contenerla, haz un slice del nombre de manera que el resultado de la subcadena dicha sea dicha palabra malsonante. En caso de no contenerla, muestra por pantalla un mensaje de bienvenida mediante un pop-up.
if (comprobacion) {
    let palabraMalsonante = nombre.slice(nombre.indexOf("Mierda"), nombre.indexOf("Mierda") + "Mierda".length);
    console.log("La palabra malsonante es: " + palabraMalsonante);
} else {
    // En caso de no contenerla, muestra un mensaje de bienvenida mediante pop-up
    alert("¡Bienvenido, " + nombre + "!");
}

let realnombre= prompt("Introduce tu nombre; ");
let mierda = "Mierda";
let bool = realnombre.includes(mierda)

if(bool){
    let i =realnombre.indexOf(mierda);
    realnombre.slice(i,i+mierda.length)

}
//9. Crea una cadena con los nombres de los compañeros que estén en tu misma fila, separados por comas.
let colleagues = "Polo,Santiago,Diana";

//10. Almacena en una variable el array resultado de separar la cadena anterior por comas (Usar un método de la clase String).
let arrayColleagues = colleagues.split(',');

//11. Itera con un bucle dicho array, imprimiendo por consola cada elemento.
for (colleagues of arrayColleagues) {
    console.log(colleagues);
}