import { getHeroeById } from "./bases/08-imp-exp";

const promesa = new Promise((resolve, reject)=> {
    
    setTimeout(() => {
        const heroe = getHeroeById (2);
        reject('No se puede encontrar el héroe')
    }, 2000);

});

promesa.then((heroe)=> {
    console.log('heroe', heroe)
})

.catch(err => console.warn(err) )