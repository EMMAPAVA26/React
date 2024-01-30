// import {heroes} from '../data/heroes'

import heroes,{owners} from "../data/heroes";

console.log(owners)

console.log(heroes);

 export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}
// console.log(getHeroeById(2))

// find , filter 
 export const getHeroesByOwner = (owner) =>{
return heroes.filter((heroe) => heroe.owner=== owner);
}

// console.log(getHeroesByOwner('DC'))