//import {heroes} from './data/heroes'
import heroes, {otro} from '../data/heroes'

export const getHeroeById = (id) => {
    return heroes.find(el => el.id === id);
}

//  console.log(getHeroeById(4));


export const getHeroesByOwner = (owner) => heroes.filter( (hero) => hero.owner === owner );


export const getOtro = () => otro;
// console.log(getHeroesByOwner('DC'));