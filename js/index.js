import Sound from "./sounds.js";

const timer = document.querySelector('.timer')
const timerMinutes = document.querySelector('.minutes')
const timerSeconds = document.querySelector('.seconds')
const btnPlay = document.querySelector('#play')
const btnStop = document.querySelector('#stop')
const btnAdd = document.querySelector('#add')
const btnRemove = document.querySelector('#remove')
const cards = document.getElementsByClassName('card')
const cardForest = document.querySelector('#forest')
const cardRain = document.querySelector('#rain')
const cardCoffeeStore = document.querySelector('#coffee')
const cardFire = document.querySelector('#fire')

let isPaused = true;
let timerTimeOut;
let seconds = Number(timerSeconds.textContent)
let minutes = Number(timerMinutes.textContent)
const sounds = Sound()

function countdown() {
    timerTimeOut = setTimeout(() => {
        if (minutes == 0 && seconds == 0)
            sounds.timeEnded()

        else if (minutes > 0 && seconds == 0) {
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

function reset() {
    minutes = 10
    seconds = 0
    displayTimer(minutes, seconds)
    btnStop.setAttribute("src", "./images/stop.svg") 
}

function activeCard(card) {
    switch (card) {
        case "rain":
            cardRain.setAttribute("src", "./images/rainning-card_active.svg")
            cardForest.setAttribute("src", "./images/forest-card.svg")
            cardFire.setAttribute("src", "./images/fire-card.svg")
            cardCoffeeStore.setAttribute("src", "./images/coffee-card.svg")

            cardRain.classList.add('active')
            cardForest.classList.remove('active')
            cardFire.classList.remove('active')
            cardCoffeeStore.classList.remove('active')
            break;

        case "fire":
            cardFire.setAttribute("src", "./images/fire-card_active.svg")
            cardRain.setAttribute("src", "./images/rainning-card.svg")
            cardForest.setAttribute("src", "./images/forest-card.svg")
            cardCoffeeStore.setAttribute("src", "./images/coffee-card.svg")

            cardFire.classList.add('active')
            cardRain.classList.remove('active')
            cardForest.classList.remove('active')
            cardCoffeeStore.classList.remove('active')
            break;

        case "coffee":
            cardCoffeeStore.setAttribute("src", "./images/coffee-card_active.svg")
            cardFire.setAttribute("src", "./images/fire-card.svg")
            cardRain.setAttribute("src", "./images/rainning-card.svg")
            cardForest.setAttribute("src", "./images/forest-card.svg")

            cardCoffeeStore.classList.add('active')
            cardFire.classList.remove('active')
            cardRain.classList.remove('active')
            cardForest.classList.remove('active')
            break;

        case "forest":
            cardForest.setAttribute("src", "./images/forest-card_active.svg")
            cardCoffeeStore.setAttribute("src", "./images/coffee-card.svg")
            cardFire.setAttribute("src", "./images/fire-card.svg")
            cardRain.setAttribute("src", "./images/rainning-card.svg")

            cardCoffeeStore.classList.remove('active')
            cardFire.classList.remove('active')
            cardRain.classList.remove('active')
            cardForest.classList.add('active')
            break;

        default:
            break;
    }
}

btnPlay.addEventListener('click', () => {
    let cardActive;

    btnPlay.setAttribute("src", "./images/play_active.svg")
    btnStop.setAttribute("src", "./images/stop.svg")    
    sounds.pressButton()

    Array.from(cards).forEach(card => {
        if (card.className.includes('active'))
            cardActive = card.id
    })

    sounds.playBg(cardActive)

    if (isPaused) {
        isPaused = false
        countdown()
    }
})

btnStop.addEventListener('click', () => {
    btnPlay.setAttribute("src", "./images/play.svg")
    btnStop.setAttribute("src", "./images/stop_active.svg")
    sounds.pressButton()
    sounds.pauseBackgroundSound()

    if (isPaused) {
        reset()
    }
    clearTimeout(timerTimeOut)
    isPaused = true
})

btnAdd.addEventListener('click', () => {
    sounds.pressButton()

    if (minutes <= 54)
        minutes += 5
    displayTimer(minutes, seconds)
})

btnRemove.addEventListener('click', () => {
    sounds.pressButton()

    if (minutes > 5)
        minutes -= 5
    displayTimer(minutes, seconds)
})

cardForest.addEventListener('click', () => {
    activeCard("forest")
    if (!isPaused) {
        sounds.playBg("forest")
    }
    
})

cardRain.addEventListener('click', () => {
    activeCard("rain")
    if (!isPaused) {
        sounds.playBg("rain")
    }
})

cardCoffeeStore.addEventListener('click', () => {
    activeCard("coffee")
    if (!isPaused) {
        sounds.playBg("coffee")
    }
})

cardFire.addEventListener('click', () => {
    activeCard("fire")
    if (!isPaused) {
        sounds.playBg("fire")
    }
})


