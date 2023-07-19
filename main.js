const month = document.getElementById('month');
const day = document.getElementById('day');
const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const proggressElem = document.getElementById('progress--bar');

const currentYear = new Date().getFullYear();

const dmbDate = new Date(`27 Jun ${currentYear + 1} 00:00:00`);


let timer = setInterval( function countdownTimer() {
    const todayDate = Date.now();

    //разница между текущей датой и дембелем
    const gap = dmbDate - todayDate;
    
    const mn = Math.floor(gap / 1000 / 60 / 60 / 24 / 31);
    const d = Math.floor(gap / 1000 / 60 / 60 / 24);
    const h = Math.floor((gap / 1000 / 60 / 60) % 24);
    const m = Math.floor((gap / 1000 / 60) % 60);
    const s = Math.floor((gap / 1000) % 60);

    month.innerHTML = mn < 10 ? "0" + mn : mn;
    day.innerHTML = d < 10 ? "0" + d : d;
    hrs.innerHTML = h < 10 ? "0" + h : h;
    min.innerHTML = m < 10 ? "0" + m : m;
    sec.innerHTML = s < 10 ? "0" + s : s;

    let leftGap = todayDate - new Date(`27 Jun 2023 00:00:00`);
    let left = Math.floor((leftGap / 1000 / 60 / 60) % 24);
    console.log(left)

    proggressElem.max = d;
    proggressElem.value = left;

    if (gap === -1) {
        clearInterval(timer);
        alert('ПОЗДРАВЛЯЮ КИСИЯ С ДЕМБЕЛЕМ!');
    }
}, 1000);

