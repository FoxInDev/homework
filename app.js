'use strict';

function go(ds) {
    ds = parseInt(ds.slice(1));
    return Math.floor(Math.random() * ds + 1)
}