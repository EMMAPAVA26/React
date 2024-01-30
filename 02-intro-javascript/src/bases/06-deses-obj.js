// Desestructuración
// Asignación Desestructurante 

const persona = {
    nombre : 'Emma',
    edad : 29,
    clave: 'emmapava26'
};

// const {nombre,edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({clave, nombre, edad, rango ='comandante' }) => {
    
//     console.log(nombre, edad, rango)
return {
 nombreClave : clave,
 anios: edad,
 latlng:{
    lat: 14.1232,
    lng:-12.3232
 }
}
}

const{nombreClave,anios,latlng:{lat,lng}} = useContext(persona);

console.log(nombreClave, anios)
console.log(lat,lng)



// Otro ejercicio 

const number = () => {
const [a,b] = [10,20];
const [, ,...rest] =[10, 20, 30, 40, 50];
return {a,b ,rest};
}

const {a,b, rest} = number();

console.log(a)
console.log(b)
console.log([a, b, rest])