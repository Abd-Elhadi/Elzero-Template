let ourSkills = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.our-skills  .container .skills .skill .the-progress span');
let stats = document.querySelector('.stats');
let statSpans = document.querySelectorAll('.stats .container .box span.number');
let started = false;
// console.log(statSpans);
// console.log(skills);
// console.log(ourSkills);

window.onscroll = () => {
    if (window.scrollY >= ourSkills.offsetTop) {
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