function addZero(num){
    return (num < 10) ? '0' + num : num;
}

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December']

function getTime(t) {
    let h = addZero(t.getHours());
    let m = addZero(t.getMinutes());
    let sec = addZero(t.getSeconds());

    return `${h}:${m}:${sec}`
}

function getData(d) {
    let n = days[d.getDay()];
    let mon = month[(d.getMonth() + 1)];
    let day = addZero(d.getDate());

    return `${n}, ${mon} ${day}`
}

const userTime= () => document.querySelector('.time').innerHTML = getTime(new Date);

setInterval(userTime, 1000);

document.querySelector('.date').innerHTML = getData(new Date);