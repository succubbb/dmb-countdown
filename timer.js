const month = document.getElementById('month');
const day = document.getElementById('day');
const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const currentYear = new Date().getFullYear();

const dmbDate = new Date(`27 Jun ${currentYear + 1} 00:00:00`);

function countdownTimer() {
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


    if (gap === 0) {
        alert('ПОЗДРАВЛЯЮ КИСИСЯ С ДЕМБЕЛЕМ!');
    }
}

let result = (fun, gap) => {
    setInterval(fun, gap);
    return;
}
 export { result, countdownTimer }
 