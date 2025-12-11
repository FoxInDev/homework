'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const totalText = document.getElementById('our');
    const btns = document.querySelector('.btns');

    let used = 0;

    for (let i = 0; i < btns.childElementCount; i++) {
        btns.children[i].setAttribute('data-id', i);
    }

    btns.addEventListener('click', (e) => {
        const numId = e.target.getAttribute('data-id');
        for (let i = 0; i < btns.childElementCount; i++) {
            btns.children[i].innerText = 'Нажми меня';
        }
        btns.children[numId].innerText = 'Нажата!';
        used += 1;
        totalText.innerHTML = used;
    })
})