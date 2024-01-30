// desestructuración Arreglos 

const personajes = ['Anaky', 'look', 'Obiwan']

const [, , p3] = personajes

console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros)

// tarea 

const useState = (valor) => {
    return[valor, () =>{console.log('Hola Mundo')}];
}

const  [nombre,setNombre]= useState('Goku');

console.log(nombre);
setNombre();