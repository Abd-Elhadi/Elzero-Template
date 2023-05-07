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