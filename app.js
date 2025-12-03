'use strict';

const prom = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position.coords.latitude, position.coords.longitude);
        })
    }
    else {
        reject(new Error('Ошибка получания координат'));
    }
    reject(new Error('Произошла неизвестная ошибка'));
})

prom
    .then(data => console.log(data))
    .catch(err => console.error(err));