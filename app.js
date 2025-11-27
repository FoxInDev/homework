'use strict';

const req = new XMLHttpRequest();
req.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
req.send();

req.addEventListener("load", function() {
    const { abilities } = JSON.parse(this.responseText);
    // console.log(abilities[0].ability.url);

    const req = new XMLHttpRequest();
    req.open('GET', abilities[0].ability.url);
    req.send();

    req.addEventListener('load', function() {
        const { effect_entries } = JSON.parse(this.responseText);
        console.log(effect_entries[0].effect);
    });
});