const durationRadioBtns = document.getElementsByName('duration') as NodeListOf<HTMLInputElement>
const numberOfTimes = document.getElementById('number-input') as HTMLInputElement
const startCountBtn = document.getElementById('start-count') as HTMLButtonElement

let durationInput: string
let loopCount: number

durationRadioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('click', function() {
        durationInput = radioBtn.value
        console.log(durationInput)
    })
})

startCountBtn.addEventListener('click', function() {
    loopCount = parseInt(numberOfTimes.value)
    console.log(loopCount)
})


