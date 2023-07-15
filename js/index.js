const timer = document.querySelector('.timer')
const timerMinutes = document.querySelector('.minutes')
const timerSeconds = document.querySelector('.seconds')
const btnPlay = document.querySelector('#play')
const btnStop = document.querySelector('#stop')
const btnAdd = document.querySelector('#add')
const btnRemove = document.querySelector('#remove')
const cardForest = document.querySelector('#forest')
const cardRain = document.querySelector('#rain')
const cardCoffeeStore = document.querySelector('#coffee')
const cardFire = document.querySelector('#fire')

let isPaused = true;
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
    btnPlay.setAttribute("src", "./images/play_active.svg")
    btnStop.setAttribute("src", "./images/stop.svg")
    
    if (isPaused) {
        isPaused = false
        countdown()
    }
})

btnStop.addEventListener('click', () => {
    btnPlay.setAttribute("src", "./images/play.svg")
    btnStop.setAttribute("src", "./images/stop_active.svg")

    if (isPaused) {
        minutes = 10
        seconds = 0
        displayTimer(minutes, seconds)
        btnStop.setAttribute("src", "./images/stop.svg")
    }
    clearTimeout(timerTimeOut)
    isPaused = true
})

btnAdd.addEventListener('click', () => {
    if (minutes <= 54)
        minutes += 5
    displayTimer(minutes, seconds)
})

btnRemove.addEventListener('click', () => {
    if (minutes > 5)
        minutes -= 5
    displayTimer(minutes, seconds)
})

cardForest.addEventListener('click', () => {
    cardForest.setAttribute("src", "./images/forest-card_active.svg")
    cardRain.setAttribute("src", "./images/rainning-card.svg")
    cardFire.setAttribute("src", "./images/fire-card.svg")
    cardCoffeeStore.setAttribute("src", "./images/coffee-card.svg")
})

cardRain.addEventListener('click', () => {
    cardForest.setAttribute("src", "./images/forest-card.svg")
    cardRain.setAttribute("src", "./images/rainning-card_active.svg")
    cardFire.setAttribute("src", "./images/fire-card.svg")
    cardCoffeeStore.setAttribute("src", "./images/coffee-card.svg")
})

cardCoffeeStore.addEventListener('click', () => {
    cardForest.setAttribute("src", "./images/forest-card.svg")
    cardRain.setAttribute("src", "./images/rainning-card.svg")
    cardFire.setAttribute("src", "./images/fire-card.svg")
    cardCoffeeStore.setAttribute("src", "./images/coffee-card_active.svg")
})

cardFire.addEventListener('click', () => {
    cardForest.setAttribute("src", "./images/forest-card.svg")
    cardRain.setAttribute("src", "./images/rainning-card.svg")
    cardFire.setAttribute("src", "./images/fire-card_active.svg")
    cardCoffeeStore.setAttribute("src", "./images/coffee-card.svg")
})


