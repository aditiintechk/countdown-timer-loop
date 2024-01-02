const durationRadioBtns = document.getElementsByName('duration') as NodeListOf<HTMLInputElement>
const numberInput = document.getElementById('number-input') as HTMLInputElement
const startCountBtn = document.getElementById('start-count') as HTMLButtonElement
const timer = document.getElementById('timer') as HTMLParagraphElement
const loopCountDisplay = document.getElementById('loop-count') as HTMLSpanElement

let durationInput: number
let numberOfTimes: number
let countdown: number

durationRadioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('click', function() {
        durationInput = parseInt(radioBtn.value)
    })
})

startCountBtn.addEventListener('click', function() {
    loopCountDisplay.textContent = numberInput.value
    numberOfTimes = parseInt(numberInput.value)
    
    displayTime(durationInput)
    countdown = setInterval(() => {
        durationInput--
        displayTime(durationInput)
    }, 1000)
})


function displayTime(duration:number) {
    const remainingMinutes = Math.floor(duration / 60)
    const remainingSeconds = duration % 60
    timer.textContent = `${(remainingMinutes < 10) ? '0' : ''}${remainingMinutes}:${(remainingSeconds < 10) ? '0' : ''}${remainingSeconds}`
}



