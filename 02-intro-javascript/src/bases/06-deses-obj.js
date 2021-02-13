

//Desestructuracion

const persona = {
    nombre: 'Tony',
    clave: 'Ironman',
    edad: 45, 
};

const {edad, clave, nombre} = persona;

const {nombre:nombre2} = persona;


console.log(persona);
console.log(nombre);
console.log(clave);
console.log(edad);
console.log(nombre2);

const retornaPersona = (usuario) => {
    const {edad, clave, nombre} = usuario;
    console.log(edad, clave, nombre);
};
retornaPersona(persona);

const retornaPersona2 = ({nombre, edad, rango = 'Capitan'}) => {
    console.log(edad, nombre, rango);
};

retornaPersona2(persona);


const useContext = ({nombre, edad, rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios : edad,
        latlng: {
            lat: 14.4564896,
            lng: 73.1564186
        },
    }
};

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
