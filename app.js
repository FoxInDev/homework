'use strict';

function race(promises) {
    return new Promise((res, rej) => {
        if (!Array.isArray(promises)) {
            return rej(new TypeError('Аргумент должен быть массивом'));
        };

        if (promises.length === 0) {
            return;
        };

        promises.forEach(promise => {
            Promise.resolve(promise)
                .then(res)
                .catch(rej);
        });
    })
}