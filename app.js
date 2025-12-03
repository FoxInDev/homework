'use strict';

const prom = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const coords = [position.coords.latitude, position.coords.longitude];
            resolve(coords);
        })
    }
    else {
        reject(new Error('Ошибка получания координат'));
    }
})

prom
    .then(data => console.log(data))
    .catch(err => console.error(err));