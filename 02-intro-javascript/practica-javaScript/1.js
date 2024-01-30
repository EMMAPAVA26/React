// practica de template string 

// entrada : (a, b)
// La suma de 5 y 3 es igual a 8

const sumaDeDos = (a,b) => {
return `la suma de ${5} y ${3} es igual a ${5+3}`
}

console.log(sumaDeDos(5,3))

// Verificar si un número es par o impar:
// entrada : 7
// salida: El número 7 es impar

const verificarSiEsPar = (number) => {
const tipo = number % 2 === 0 ? 'par' : 'impar'
return `el numero ${number} es ${tipo}`
}

console.log(verificarSiEsPar(7))


// Creación de un nuevo objeto combinando las propiedades

const información = {
 nombre : 'Emma',
 apelllido : 'Pava',
 
};

const detallesPersona = {
ciudad : 'Manizales',
celular : 3125395338,
edad: 29, 
};

const nuevaPersona = {...información, ...detallesPersona}

console.log(nuevaPersona)

// Arreglos 

let miArreglo = ['Manzana', 'Pera', 'Uva', 10, true];

// Accediendo a elementos del arreglo mediante sus índices 

console.log(miArreglo[0])
console.log(miArreglo[1])
console.log(miArreglo[2])

// Modificando un elemento del Arreglo 

miArreglo[2] = 'Limon'

console.log(miArreglo)

// propiedad length : obteniendo la cantidad de elementos  en el arreglo

console.log(miArreglo.length)

// Clase de Javascript 

// Ejemplo de la variable let 

let numero = 10;
numero = 20; // Se puede reasignar el valor

// Ejemplo de la variable const 

const PI = 3.1416;
// PI = 3.14; // Esto causaría un error, no se puede reasignar PI

const persona = {
  nombre: 'Juan',
  edad: 30
};
persona.edad = 31; // Se puede modificar la propiedad interna del objeto


// Tipos 

// number 

// Ejercicios de desestructuración 

const persona1 = {
nombre : 'Carlos',
edad : 46,
ciudad : 'Manizales'
};

const {nombre,edad,ciudad} = persona1; 

console.log(nombre)
console.log(edad)
console.log(ciudad)
console.log(nombre, edad, ciudad)

// Tipos Primitivos de datos 

// number 

let miEntero = 1;
let miDecimil = 1.33;

//boolean 

let si = true;
let no = false; 

// string 

let dato = "Esto es un string";
let otroDato = 'Hola soy Emma '

// Undefined 

// Operaciones 

const suma = (a, b) => {
return a+b
}
 console.log(suma(3, 5))

let num = 5;
let num1 = 7; 

const resultado = num + num1

console.log(resultado)


// typeof  

console.log(typeof(5))

console.log(typeof(dato))

console.log(typeof(si))


// Algortimos de operadores booleanos 

//  Verificar si un número es positivo o negativo
// Planteamiento:
// Escribe un programa que tome un número como entrada e imprima "Positivo" si es mayor que cero, y "Negativo" si es menor que cero.
// Entrada: 5
// Salida: Positivo

// Sentencia If 

const verificarNumero = (number) => {
 if(number > 0 ){
  return 'positivo'
 }else{
  return 'negativo'
 }
}

console.log(verificarNumero(-1))


// Operador Ternario 

const verificarNumero1 = (number) => {
return number > 0 ? 'positivo' : 'negativo' 
}

console.log(verificarNumero1(5))


// Ejercicio 2: Determinar si un número es par o impar
// Planteamiento:
// Crea un programa que reciba un número entero como entrada y determine si es par o impar.
// Entrada: 10
// Salida: Par

const determinarSiEsParOImpar = (number) => {
// if(number % 2 === 0){
//   return 'es par'
// }else {
//   return ' es impar'
// }

return number % 2 === 0 ? 'es par' : 'es impar';
}

console.log(determinarSiEsParOImpar(3))

// Ejercicio 3: Comparar dos números
// Planteamiento:
// Desarrolla un programa que compare dos números e imprima "Son iguales" si son iguales, "El primero es mayor" si el primero es mayor, y "El segundo es mayor" si el segundo es mayor.
// Entrada: 7, 5
// Salida: El primero es mayor

const compararDosNúmeros = (num1, num2) => {
// if(num1 === num2){
//   return 'son iguales'
// }else if(num1 > num2){
//   return 'El primero es mayor'
// }else{
//   return 'El segundo es mayor '
// }

 return num1 === num2 ? 'son iguales' :
        num1 > num2  ? 'El primero es mayor' : 'El segundo es mayor '
}

console.log(compararDosNúmeros(9,7))


// /6 Planteamiento: Verificar si un estudiante aprobó o reprobó un examen.

// Entrada: La calificación obtenida en el examen (número entero).

// Salida: "Aprobado" si la calificación es mayor o igual a 60, o "Reprobado" si es menor a 60./

const notes  = (number) => {
  return number >= 60 ? 'Aprobado' : 'Reprobado'
}

console.log(notes(65))
console.log(notes(50))


