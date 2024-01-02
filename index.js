"use strict";
const durationRadioBtns = document.getElementsByName('duration');
const numberInput = document.getElementById('number-input');
const startCountBtn = document.getElementById('start-count');
const timer = document.getElementById('timer');
const loopCountDisplay = document.getElementById('loop-count');
let durationInput;
let numberOfTimes;
let countdown;
durationRadioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('click', function () {
        durationInput = parseInt(radioBtn.value);
    });
});
startCountBtn.addEventListener('click', function () {
    loopCountDisplay.textContent = numberInput.value;
    numberOfTimes = parseInt(numberInput.value);
    displayTime(durationInput);
    countdown = setInterval(() => {
        durationInput--;
        displayTime(durationInput);
    }, 1000);
});
function displayTime(duration) {
    const remainingMinutes = Math.floor(duration / 60);
    const remainingSeconds = duration % 60;
    timer.textContent = `${(remainingMinutes < 10) ? '0' : ''}${remainingMinutes}:${(remainingSeconds < 10) ? '0' : ''}${remainingSeconds}`;
}
