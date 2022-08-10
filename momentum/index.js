function addZero(num){
    return (num < 10) ? '0' + num : num;
}

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function getTime(t) {
    let h = addZero(t.getHours());
    let m = addZero(t.getMinutes());
    let sec = addZero(t.getSeconds());

    return `${h}:${m}:${sec}`
}


const userTime= () => document.querySelector('.time').innerHTML = getTime(new Date);

const myTimeout = setInterval(userTime, 1000);