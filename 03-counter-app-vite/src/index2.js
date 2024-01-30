const exchangeCapitalLetters = (string) => {
    return string.split("").map((item) => item === item.toLowerCase() ? item.toUpperCase(): item.toLowerCase()).join('')
}
    
    console.log(exchangeCapitalLetters("jAvAsCrIpT"))

//     // /* 2 Contar vocales
// Planteamiento:
// Crear una función que tome una cadena como entrada y devuelva el número de vocales en esa cadena.
// Entrada:
// contarVocales("Programación");
// Salida Esperada:
// 4*/

// const countVowels = (string) => {
// return string.split('').replace(/[aeiouAEIOU]/gi)).length
// }

// console.log(countVowels("Programación"))

// // /* 3 Eliminar espacios en blanco
// Planteamiento:
// Crear una función que tome una cadena como entrada y devuelva una nueva cadena sin espacios en blanco.
// Entrada:
// eliminarEspacios("Hola mundo feliz");
// Salida Esperada:
// Holamundofeliz*/

const removeWhitespace = (str) => {
return str.split(" ").join(" ")
}

console.log(removeWhitespacer("Hola mundo feliz"))

// 