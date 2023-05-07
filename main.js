let ourSkills = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.our-skills  .container .skills .skill .the-progress span');
let stats = document.querySelector('.stats');
let statSpans = document.querySelectorAll('.stats .container .box span.number');
let started = false;


window.onscroll = () => {
    if (window.scrollY >= ourSkills.offsetTop - 250) {
        spans.forEach(span => {
            span.style.width = span.dataset.width;
        })
    }

    if (window.scrollY >= stats.offsetTop) {
        if (!started) {
            statSpans.forEach(span => {
                startCount(span);
            })
        }
        started = true;
    }
};

function startCount(element) {
    let goal = element.dataset.number;
    let count = setInterval(() => {
        element.innerHTML++;

        if (element.textContent == goal) {
            clearInterval(count);
            if (element.dataset.thousand) {
                element.innerHTML = `${element.innerHTML}K`
            }
        }
    }, 2000 / goal);
}
let clickCounter = 0;
// get other links element
let megaMenuButton = document.querySelector('.header .main-nav > li.mega');
let megaMenuElement = document.querySelector('.header .main-nav > li .mega-menu');
megaMenuButton.addEventListener('click', e => {
    megaMenuButton.classList.add('menuOn');
    clickCounter++;
    if (clickCounter === 2) {
        megaMenuButton.classList.remove('menuOn');
        clickCounter = 0;
    }
});

// countdown up to the end of the year
let countDownDate = new Date("Dec 31, 2023 23:59:59 ").getTime();

let counter = setInterval(() => {
    // get date now
    let now = new Date().getTime();

    // get the diffence between now and countdown date
    let distance = countDownDate - now;

    // get time units
    // let days = Math.floor(distance / 1000 / 60 / 60 / 24);
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));

    let seconds = Math.floor(distance % (1000 * 60) / (1000));

    document.querySelector('.days span').innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector('.hours span').innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.minutes span').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.seconds span').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (distance < 0) {
        clearInterval(counter);
    }

}, 1000);