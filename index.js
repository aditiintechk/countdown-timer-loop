"use strict";
const durationRadioBtns = document.getElementsByName('duration');
const numberOfTimes = document.getElementById('number-input');
const startCountBtn = document.getElementById('start-count');
let durationInput;
let loopCount;
durationRadioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('click', function () {
        durationInput = radioBtn.value;
        console.log(durationInput);
    });
});
startCountBtn.addEventListener('click', function () {
    loopCount = parseInt(numberOfTimes.value);
    console.log(loopCount);
});
