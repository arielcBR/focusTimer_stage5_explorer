const timer = document.querySelector('.timer')
const timerMinutes = document.querySelector('.minutes')
const timerSeconds = document.querySelector('.seconds')
const btnPlay = document.querySelector('#play')
const btnStop = document.querySelector('#stop')
const btnAdd = document.querySelector('#add')
const btnRemove = document.querySelector('#remove')

let isNotPaused = false;
let timerTimeOut;
let seconds = Number(timerSeconds.textContent)
let minutes = Number(timerMinutes.textContent)

function countdown() {
    timerTimeOut = setTimeout(() => {

        if (minutes > 0 && seconds == 0) {
            seconds = 59
            minutes--
        }
        else if (minutes >= 0 && seconds > 0)
            seconds--

        displayTimer(minutes, seconds)
        countdown()
    }, 1000);
}

function displayTimer(minutes, seconds = 0){
    timerMinutes.textContent = String(minutes).padStart(2, '0')
    timerSeconds.textContent = String(seconds).padStart(2, '0')
}

btnPlay.addEventListener('click', () => {
    if (!isNotPaused) {
        countdown()
        isNotPaused = true
    }
})

btnStop.addEventListener('click', () => {
    if (!isNotPaused) {
        minutes = 10
        seconds = 0
        displayTimer(minutes, seconds)
    }

    clearTimeout(timerTimeOut)
    isNotPaused = false
})

btnAdd.addEventListener('click', () => {
    if (minutes <= 58)
        minutes += 1
    displayTimer(minutes, seconds)
})

btnRemove.addEventListener('click', () => {
    if (minutes >= 2)
        minutes -= 1
    displayTimer(minutes, seconds)
})




