
const persona = {
    nombre : 'tony',
    apellido: 'Stark', 
    edad: 29,
    dirección : {
    ciudad: 'Manizales',
    long: 1800000,
    zip: 54486953
    }

};

const persona2 = {...persona};
persona2.nombre = 'Emma'


console.table(persona)
console.log(persona2)


