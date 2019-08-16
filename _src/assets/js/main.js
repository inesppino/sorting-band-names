'use strict';

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
    //el espacio despues es para que no coja "anywhere" si no solo 'an '.
    //la i es insensitive, para que coja mayusculas y minulsculas
    //.trim() quita el espacio una vez remplazado si lo hubiese
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort(function(a,b) {
    //al usar strip en el condicional, modifica para hacer el sort, pero en el array final siguen estando con los articulos
    return strip(a) > strip(b) ? 1:-1;
});

//.join devuelve un string entero, asi quitas las comas entre cada elemento
document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
