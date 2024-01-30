
// template strings 

const nombre =  "Emma" 

const apellido = "Pava" 

const nombreCompleto = `${ nombre} ${apellido}` 

console.log(nombreCompleto)


const getSaludo = (nombre) => {
  return "hola " +  nombre; 
}

console.log(` este es un saludo : ${getSaludo (nombre)}  `)