//177 bpm. it's 338.98305084ms
window.onload = function(){
    const progressBar = document.querySelector('#progressQuestion');
    const q1 = document.querySelector('#q1');
    const q2 = document.querySelector('#q2');
    const t1 = document.querySelector('#t1');
    const t2 = document.querySelector('#t2');

    q1.addEventListener('click', function() {
        progressBar.style.animation =  `progressAnimationStrike 2.711864406s linear infinite`;
        t1.style.animation = `pumpL 677.96610169ms infinite cubic-bezier(0,.92,1,.14)`;
        t2.style.animation = `pumpR 677.96610169ms infinite cubic-bezier(0,.92,1,.14)`;
    })

    q2.addEventListener('click', function() {
        progressBar.style.animation =  ``;
        t1.style.animation = ``;
        t2.style.animation = ``;
    })
}
