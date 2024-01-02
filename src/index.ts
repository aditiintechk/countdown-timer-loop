
// Target Inputs
const durationRadioBtns = document.getElementsByName('duration') as NodeListOf<HTMLInputElement>
const numberInput = document.getElementById('number-input') as HTMLInputElement
const startCountBtn = document.getElementById('start-count') as HTMLButtonElement
const timer = document.getElementById('timer') as HTMLParagraphElement
const loopCountDisplay = document.getElementById('loop-count') as HTMLSpanElement

// Declarations
let durationInput: number
let numberOfTimes: number
let countdown: number
let loopCount: string

// Event Listeners
durationRadioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('click', function() {
        durationInput = parseInt(radioBtn.value)
    })
})

startCountBtn.addEventListener('click', countdownTimerLoop)

// Functions
function countdownTimerLoop() {
    loopCountDisplay.textContent = numberInput.value
    numberOfTimes = parseInt(numberInput.value)
    numberInput.value = ''

    let seconds = durationInput
    displayTime(seconds)
    countdown = setInterval(() => {
        seconds--
        displayTime(seconds)

        if(seconds <= 0) {
            numberOfTimes--
            loopCountDisplay.textContent = String(numberOfTimes)
            seconds = durationInput + 1

            if(numberOfTimes === 0) {
                clearInterval(countdown)
            }
        }
    }, 1000)
}

function displayTime(duration:number) {
    const remainingMinutes = Math.floor(duration / 60)
    const remainingSeconds = duration % 60
    timer.textContent = `${(remainingMinutes < 10) ? '0' : ''}${remainingMinutes}:${(remainingSeconds < 10) ? '0' : ''}${remainingSeconds}`
}


