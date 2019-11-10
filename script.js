/* $(document).ready(function () {
    $(".preload").each(function (index, element) {
        setTimeout(function () { $(element).removeClass("preload") }, 10);
    });
}); */

function setDate () {
const hour = document.querySelector('.hour-hand');
const min = document.querySelector('.min-hand');
const second = document.querySelector('.second-hand');

const now = new Date();

const seconds = now.getSeconds();
const mins = now.getMinutes();
const hours = now.getHours();

const secondDegrees = (seconds * 6) + 90;
const minDegrees = (mins * 6) + 90;

if(mins <= 12){
    var hoursDegree = 6; 
}
else if(mins > 12 && mins <= 24){
    var hoursDegree = 12; 
}
else if(mins > 24 && mins <= 36){
    var hoursDegree = 24; 
}
else if(mins > 36 && mins <= 48){
    var hoursDegree = 36; 
}
else if(mins > 48 && mins <= 90){
    var hoursDegree = 48; 
}

if(hours <= 12){
    var hoursDegrees = (hours * 30) + hoursDegree + 90;
}
else if(hours > 12){
    var hoursDegrees = ((hours - 12) * 30) + hoursDegree + 90;
}


second.style.transform = `rotate(${secondDegrees}deg)`;
min.style.transform = `rotate(${minDegrees}deg)`;
hour.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();

/////////////////////////////////////////////
//////////////////PANELS/////////////////////

const panels = document.querySelectorAll('.panel');


function toggleOpen() {
    this.classList.toggle('open');
};

function toggleOpenActive(e) {
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
};


panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));