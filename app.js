'use strict';

// const req = new XMLHttpRequest();
// req.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
// req.send();
// req.addEventListener("load", function() {
//     const { abilities } = JSON.parse(this.responseText);
//     // console.log(abilities[0].ability.url);
//     const req = new XMLHttpRequest();
//     req.open('GET', abilities[0].ability.url);
//     req.send();


//     req.addEventListener('load', function() {
//         const { effect_entries } = JSON.parse(this.responseText);
//         console.log(effect_entries[0].effect);
//     });
// });

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => {
        const UseUrl = data.abilities[0].ability.url;
        return fetch(UseUrl);
    })
    .then(res => res.json())
    .then(data => {
        const UseUrl = data.effect_entries[0].effect;
        console.log(UseUrl)
    })
    .catch(err => {
        throw new Error('ошибка');
    });