'use strict';
const timerEl = document.getElementById('timer');

function updateTimer() {
    timerEl.innerHtml = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
    const now = new Date();
    const newYearDate = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYearDate - now;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    let months = Math.floor(totalDays / 30);
    const days = totalDays % 30;
}

setInterval(updateTimer, 1000);
updateTimer();