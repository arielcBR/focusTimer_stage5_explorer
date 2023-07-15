
export default function () {
    const btnPressAudio = new Audio("../sounds/button-press.wav")
    const timeEndAudio = new Audio("../sounds/kichen-timer.mp3")
    const bgRain = new Audio("../sounds/rain.wav")
    const bgFire = new Audio("../sounds/fire.wav")
    const bgCoffee = new Audio("../sounds/coffeeStore.wav")
    const bgForest = new Audio("../sounds/forest.wav")

    function pressButton() {
        btnPressAudio.play()
    }

    function timeEnded() {
        timeEndAudio.play()
    }

    function playBg(song) {
        switch (song) {
            case "forest":
                pauseBackgroundSound()
                bgForest.loop = true
                bgForest.play()
                break;
            case "coffee":
                pauseBackgroundSound()
                bgCoffee.loop = true
                bgCoffee.play()
                break;
            case "rain":
                pauseBackgroundSound()
                bgRain.loop = true
                bgRain.play()
                break;
            case "fire":
                pauseBackgroundSound()
                bgFire.loop = true
                bgFire.play()
                break;
        
            default:
                break;
        }
    }

    function pauseBackgroundSound() {
        bgRain.pause()
        bgFire.pause()
        bgCoffee.pause()
        bgForest.pause()
    } 
    
    return {
        pressButton,
        timeEnded,
        playBg,
        pauseBackgroundSound
    }
}

