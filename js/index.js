
window.onload = () => updateTime();

let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function updateTime () {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let day = now.getDay();
    
    let pmam = hours >= 12 ? "pm" : "am";
    hours = hours % 12;

    document.querySelector('.time__weekday')
    .innerHTML = dayNames[day];
    document.querySelector('.time__hour')
    .innerHTML = hours;
    document.querySelector('.time__minute')
    .innerHTML = minutes;
    document.querySelector('.time__pm-am')
    .innerHTML = pmam;


    setTimeout(updateTime, 200)
    console.log('update')
}