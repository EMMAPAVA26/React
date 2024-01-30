
// //parseInt ( )

// const { splitVendorChunk } = require("vite");

// const { string } = require("prop-types");

// const number = (num) => {
//    return parseInt(num )  
// }


// console.log(number("111"))

// // number.toFixed(X)

// const number1 = (num) => {
//     return num.toFixed ()
//  }

//  console.log(number1(2.5674))

//  // Array 

//  let miArray = [1, 2, 3, 4, 5] // Array de números 
//  let miArray1 = ["hola", "Emma", "Soy Manizaleña"] // Array de Strings 
//  let miArray2 = [{propiedad : "valor1"}, {propiedad : "valor2"}, {propiedad: "valor3"}]

//  // Acceder Elementos 

//  const accederEelementos = (arr) => {
//  return arr[2]
//  }

//  console.log(accederEelementos(["manzana", "plátano", "naranja"]))

//  // Agregar elementos al final 
//  const agregarElementos = (arr) => {
//     return[...arr, "uva"].length
    
//     }
   
// //     console.log(agregarElementos(["manzana", "plátano", "naranja"]))

// //     // Ordenar un array de números de forma ascendente:
// //     // Entrada : [5, 2, 8, 1, 3]
// //     // Salida : [1, 2, 3, 5, 8]

// //     const ordenarAscendente = (arr) => {
// //      return arr.sort((a,b) =>   a-b )
// //     }

// //     console.log(ordenarAscendente([5, 2, 8, 1, 3, 55]))

    

// // // otro ejercicio

// // const ordenar = (arr) => {
// // return arr.sort((a,b) => a.localeCompare(b))
// // }

// // console.log(ordenar(["EMMA", "sol", "LUNA", "computador"]))

// // // Su trabajo es devolver una única matriz que tenga primero los números ordenados en orden ascendente, 
// // // seguidos de las cadenas ordenadas en orden alfabético. Los valores deben mantener su tipo original.
// // // // Tenga en cuenta que los números escritos como cadenas son cadenas y deben ordenarse con las otras cadenas. 
// // // Entrada: ["Banana", "Orange", "Apple", "Mango", 0, 2, 2]. Salida: [ 0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange' ]

// // const ordenarDeManeraAscendente = (arr) => {
// // const number =  arr.filter((item)=>typeof item === "number").sort((a,b) => a-b)
// // const words = arr.filter((item) => typeof item === "string").sort()
// // return [...number,...words]


// // }

// // console.log(ordenarDeManeraAscendente(["Banana", "Orange", "Apple", "Mango", 0, 2, 2,1]))

// // // Su trabajo aquí es escribir una función que tome una matriz ordenada arr y un valor val, 
// // //y devuelve el índice más bajo donde podría insertar val para mantener la ordenación de la matriz 
// // //La matriz de entrada siempre se ordenará en orden ascendente. Puede contener duplicados.
// // // No modifique la entrada.
// // // keepOrder([1, 2, 3, 4, 7], 5) //=> 4
// // //                                        ^(index 4)
// // // keepOrder([1, 2, 3, 4, 7], 0) //=> 0
// // //                       ^(index 0)
// // // keepOrder([1, 1, 2, 2, 2], 2) //=> 2
// // //                              ^(index 2)

// // const ordenarIndex = (arr, val) => {
// // return [...arr, val].sort((a,b) => a-b).indexOf(val)
// // }

// // console.log(ordenarIndex([1, 2, 3, 4, 7], 5))
// // console.log(ordenarIndex([1, 2, 3, 4, 7], 0))
// // console.log(ordenarIndex([1, 1, 2, 2, 2], 2))

// // // // Planteamiento: Crea una función que reciba un array y un índice, 
// // // y devuelva el elemento en ese índice utilizando el método at.
// // // ENTRADA : let arr = [10, 20, 30, 40, 50]; let index = 2;
// // // SALIDA: 30

// // // let array = [10, 20, 30, 40, 50]; 
// // // let index = 2

// // const devolverElemento = (arr) => {
// // return arr.at(2)
// // }

// // console.log(devolverElemento([10, 20, 30, 40, 50]))

// // // // Planteamiento: Crea una función que reciba una cadena y un índice, y 
// // // devuelva el carácter en ese índice utilizando el método at.


// // const devolverElementoIndice = (arr) => {

// // }

// // /// Planteamiento: Implementa una función que tome un array de objetos y un índice, 
// // // y devuelva el valor de la propiedad 'name' del objeto en ese índice utilizando el método at.
// // // // Entrada:
// // // // let arrayOfObjects = [
// // // //     { name: 'Alice', age: 25 },
// // // //     { name: 'Bob', age: 30 },
// // // //     { name: 'Charlie', age: 22 }
// // // // ];
// // // // let index = 1;
// // // // Salida Esperada:
// // // // Bob

// // // let arrayOfObjects = [
// // //        { name: 'Alice', age: 25 },
// // //        { name: 'Bob', age: 30 },
// // //        { name: 'Charlie', age: 22 }
// // //    ];

// // //    let index = 1;

// // // // Salida Esperada:
// // // // Bob

// // // const valueProperty = (arr, i) => {
// // // return arr.at(i).name
// // // }

// // // console.log(valueProperty(arrayOfObjects, index))


// // // // // Ejercicio 4:
// // // // Planteamiento: Escribe una función que reciba una cadena y dos índices, 
// // // // y devuelva la subcadena entre esos dos índices utilizando el método at.
// // // // Entrada:
// // // // let str = "JavaScript";
// // // // let start = 2;
// // // // let end = 6;
// // // // Salida Esperada:
// // // // vaScr

// // // const 



// // // //// Planteamiento: Implementa una función que reciba dos cadenas y un índice, 
// // // // y devuelva una nueva cadena que contenga los caracteres de ambas cadenas en ese índice utilizando charAt().

// // // // Entrada:

// // let str1 = "Hola";
// // let str2 = "Mundo";
// // let index = 2;

// // // Salida Esperada:
// // // "lo"

// // const newChain = (str,str2, i) => {
// // return str.charAt(i) + str2.charAt(i)

// // // return ${str.charAt(i)}${str2.charAt(i)}
// // }

// // console.log(newChain(str1, str2, index))

// // //// Ejercicio 3:
// // // Planteamiento: Crea una función que tome una cadena y devuelva una nueva cadena 
// // // con los caracteres en posiciones impares utilizando el método charAt().

// // // Entrada:
// // // let str = "abcdefgh";
// // // Salida Esperada:
// // // "bdfh"

// // let str = "abcdefgh";

// // const Newchain1 = (str) => {
// // return str.charAt()
// // }

// // console.log(newChain(str))

// // // Ejercicio 4:
// // Planteamiento: Escribe una función que reciba una cadena y devuelva la misma 
// // cadena pero con el primer y último carácter intercambiados utilizando charAt().

// // Entrada:
// // let str = "programacion";
// // Salida Esperada:
// // "nrogramaciop"

// let str3 = "programacion";

// const firstAndLastCharacter = (str) => {

// const primerCaracter = str.charAt(0)
// const ultimoCaracter = str.charAt(str.length-1)

// return ultimoCaracter + str.slice(1, -1)+primerCaracter
// }

// console.log(firstAndLastCharacter(str3))

// // Algortimos 

// // Su trabajo es devolver una única matriz que tenga primero los números ordenados en orden ascendente, 
// // seguidos de las cadenas ordenadas en orden alfabético. Los valores deben mantener su tipo original.
// // // Tenga en cuenta que los números escritos como cadenas son cadenas y deben ordenarse con las otras cadenas. 
// // Entrada: ["Banana", "Orange", "Apple", "Mango", 0, 2, 2]. Salida: [ 0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange' ]

// const array = ["Banana", "Orange", "Apple", "Mango", 0, 2, 2, 1, 3]

// const orderNumbers = (arr) => {

// const numbers = arr.filter((item) => typeof item === "number").sort((a,b) => a-b)
// const words = arr.filter((item) => typeof item === "string").sort()
// return [...numbers, ...words]
// }

// console.log(orderNumbers(array))

// // Su trabajo aquí es escribir una función que tome una matriz ordenada arr y un valor val, 
// //y devuelve el índice más bajo donde podría insertar val para mantener la ordenación de la matriz 
// //La matriz de entrada siempre se ordenará en orden ascendente. Puede contener duplicados.
// // No modifique la entrada.
// // keepOrder([1, 2, 3, 4, 7], 5) //=> 4
// //                                        ^(index 4)
// // keepOrder([1, 2, 3, 4, 7], 0) //=> 0
// //                       ^(index 0)
// // keepOrder([1, 1, 2, 2, 2], 2) //=> 2
// //                              ^(index 2)

// const sortAscending = (arr,val )=> {
// return [...arr,val].sort((a,b) => a-b).indexOf(val)
// }

// console.log(sortAscending([1, 2, 3, 4, 7], 5))
// console.log(sortAscending([1, 2, 3, 4, 7], 0))
// console.log(sortAscending([1, 1, 2, 2, 2], 2))


// // Ejercicio 2:
// // Planteamiento: Crea una función que reciba una cadena y un índice, y 
// // devuelva el carácter en ese índice utilizando el método at.

// // Entrada:
// // let str = "Hola, mundo!";
// // let index = 7;
// // Salida Esperada:
// // m

// let str = "Hola, mundo!";
// let index = 7;

// const returnCharacter = (str1, index1) => {
// return str1.at(index1)
// }

// console.log(returnCharacter(str,index))

// // // Planteamiento: Implementa una función que tome un array de objetos y un índice, 
// // y devuelva el valor de la propiedad 'name' del objeto en ese índice utilizando el método at.
// // Entrada:
// // let arrayOfObjects = [
// //     { name: 'Alice', age: 25 },
// //     { name: 'Bob', age: 30 },
// //     { name: 'Charlie', age: 22 }
// // ];
// // let index = 1;
// // Salida Esperada:
// // Bob

// let arrayOfObjects = [
//         { name: 'Alice', age: 25 },
//         { name: 'Bob', age: 30 },
//         { name: 'Charlie', age: 22 }
//     ];
//     let index2 = 1;

//  const returnPropertyValue = (arr,i) => {
//   return arr.at(i).name
//  }

//  console.log(returnPropertyValue(arrayOfObjects,index2))

// // // Planteamiento: Escribe una función que reciba una cadena y dos índices, 
// // y devuelva la subcadena entre esos dos índices utilizando el método at.
// // Entrada:
// // let str = "JavaScript";
// // let start = 2;
// // let end = 6;
// // Salida Esperada:
// // vaScr


// let str2 = "JavaScript";
// let start = 2;
// let end = 6;

// const twoIndexSubstring = (str, start, end) => {
//   return str.slice(start, end+1);
// }

// console.log(twoIndexSubstring(str2, start, end));

// // Planteamiento: Implementa una función que reciba dos cadenas y un índice, 
// // y devuelva una nueva cadena que contenga los caracteres de ambas cadenas en ese índice utilizando charAt().

// // Entrada:
// // let str1 = "Hola";
// // let str2 = "Mundo";
// // let index = 2;
// // Salida Esperada:
// // "lo"(

// let str4 = "Hola";
// let str5 = "Mundo";
// let index3 = 2;

// const newString = (str, str1, index ) =>{
// // return str.charAt(index)+ str1.charAt(index)
// return `${str.charAt(index)}${str1.charAt(index)}`

// }

// console.log(newString(str4, str5, index3))


// // Planteamiento: Crea una función que tome una cadena y devuelva una nueva cadena 
// // con los caracteres en posiciones impares utilizando el método charAt().

// // Entrada:
// // let str = "abcdefgh";
// // Salida Esperada:
// // "bdfh"

// let str6 = "abcdefgh"

// const returnNewString = (str) => {
// return str.split("").filter((item, index) => item.charAt(index % 2 !== 0)).join("")

// // return str.split("").filter((item, index) => item.charAt(index % 2 === 0)).join("")
// }

// console.log(returnNewString(str6))

// /// Ejercicio 4:
// // Planteamiento: Escribe una función que reciba una cadena y devuelva la misma 
// // cadena pero con el primer y último carácter intercambiados utilizando charAt().

// // Entrada:
// // let str = "programacion";
// // Salida Esperada:
// // "nrogramaciop"

// let str9 = "programacion";

// const firstAndLastCharacter1 = (str) => {
// const first1 = str.charAt()
// const last1= str.charAt(str.length-1)

// // return `${last1}${str.slice(1,-1)}${first1}`

// // }

// // console.log(firstAndLastCharacter1(str9))


// // // Ejercicios del template String 

// // // Concatenar Nombre 
// // // Salida : "Mi nombre completo es Juan Pérez."

// // const nombre = "Juan";
// // const apellido = "Pérez";

// // const concatenateName = (str1, str2) => {

// //   return `mi nombre completo es ${str1} ${str2}`
// // }

// // console.log(concatenateName(nombre, apellido))

// // // Calcular el Área del un Rectángulo 
// // // Salida : "El área del rectángulo es 15 unidades cuadradas."

// // const longitud = 5;
// // const ancho = 3;

// // const areaOfARectangle = (number1, number2) => {

// // return `El área del rectángulo es ${number1*number2} unidades cuadradas `
// // }
// // console.log(areaOfARectangle(longitud, ancho))

// // Saludar a un Usuario: "Bienvenido/a, Alice."

// const nombreUsuario = "Alice";

// const greeting = (string) => {

// return  `Bienvenido/a, ${string}`

// }

// console.log(greeting(nombreUsuario))

// // Comprobar si un Número es Par o Impar:
// // Salida : "El número 7 es impar."

// const numero = 7;

// const checkIfItIsEvenOrOdd = (number) => {

//   return `El número ${number} es ${number % 2 === 0 ? "par" : "impar"}`

// }

// console.log(checkIfItIsEvenOrOdd(numero))


// // Algortimos del método Slice 
// // salida : "Cgrama"

// const cadena = "EmmayCarlos";
// const inicio = 4;
// const fin = -3;

// const extractSubstring = (string,star, find ) => {

// return  string.slice(star,find )
// }

// console.log(extractSubstring(cadena,inicio, fin))

// // Obtener los Últimos N Caracteres:
// // salida: "Script"

// const palabra = "JavaScript";
// const n = 4;

// const getLastCharacters = (string, number) => {
// return string.slice(number)
// }

// console.log(getLastCharacters(palabra, n))

// // Copiar una Matriz
// // Salida : [2, 3, 4]

// const arrayOriginal = [1, 2, 3, 4, 5];
// const star1 = 1;
// const find1 = 6;

// const copyAnArray = (array,star, find) => {

// return array.slice(star, find)
// }

// console.log(copyAnArray(arrayOriginal, star1, find1))

// Dividir una Cadena por un Delimitador:
// salida : ["Hola", " cómo", " estás"]

// const frase = "Hola, cómo, estás";
// const delimitador = ",";

// const splitAString = (str) => {
// return str.split( ",")
// }

// console.log(splitAString("Hola, cómo, estás"))

 













