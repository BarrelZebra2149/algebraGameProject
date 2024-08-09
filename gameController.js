//177 bpm. it's 338.98305084ms
window.onload = function(){
    const progressBar = document.querySelector('#progressQuestion');
    const q1 = document.querySelector('#q1');
    const q2 = document.querySelector('#q2');
    const q3 = document.querySelector('#q3');
    const q4 = document.querySelector('#q4');

    q1.addEventListener('click', function() {
        progressBar.style.animation =  `progressAnimationStrike 2.711864406s linear infinite`;
    })

    q2.addEventListener('click', function() {
        progressBar.style.animation =  ``;
    })
}