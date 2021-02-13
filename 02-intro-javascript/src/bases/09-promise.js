import { getHeroeById } from '../bases/08-imp-exp'


/*
const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const heroe = getHeroeById(1);
        const owners = getHeroesByOwner('DC');
        resolve(heroe, owners);
    }, 2000);
});

promesa.then( (heroe) => {
    console.log('Heroe', heroe);
} )
.catch( err => console.warn( err ));

*/

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se encontro Heroe');
            }
        }, 2000);
    });
};


getHeroeByIdAsync(4)
    .then( console.log )
    .catch( console.warn );





