"use strict";

let questionMark = document.getElementById('qm');
let theld1 = document.getElementById('ld1');
let suck = document.getElementById('suck');
let theld3 = document.getElementById('ld3');
let theld4 = document.getElementById('ld4');

let playA = () => {
    let audio = new Audio('../sound/sound.mp3');
    audio.play();
};

let jld1 = () => {
    theld1.classList.toggle('ld1Active');
    console.log("funkar");
};

let jsuck = () => {
    suck.classList.toggle('ld2Active');
};

let jld3 = () => {
    theld3.classList.toggle('ld3Active');
};

let jld4 = () => {
    theld4.classList.toggle('ld4Active');
};

let pointers = () => {
    questionMark.classList.toggle('pointer');
}

questionMark.addEventListener('click', () => {
    playA();
    jld1();
    jsuck();
    jld3();
    jld4();
    pointers();
    setTimeout(() => {
        jld1();
        jld3();
        jld4();
        jsuck();
        pointers();
    }, 5000);
});
