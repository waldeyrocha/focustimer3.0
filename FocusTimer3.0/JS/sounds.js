import {
    buttonForestSound,
    buttonRainSound,
    buttonCoffeeSound,
    buttonFireSound,
    buttonVolumeForest,
    buttonVolumeRain,
    buttonVolumeCoffee,
    buttonVolumeFire,
    groupForest,
    groupRain,
    groupCoffee,
    groupFire
} from "./elements.js"

export default function Sounds(){

    // timer sounds
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    function pressButtonAudio() {
        buttonPressAudio.play()
    }

    function timeUp() {
        kitchenTimer.play()
    }   

    // background sounds

    const forestAudio = new Audio("./sounds/floresta.wav")
    const fireAudio = new Audio("./sounds/lareira.wav")
    const coffeeAudio = new Audio("./sounds/cafeteria.wav")
    const rainAudio = new Audio("./sounds/chuva.wav")

    forestAudio.loop = true
    rainAudio.loop = true
    coffeeAudio.loop = true
    fireAudio.loop = true    

    forestAudio.volume = 0.5
    rainAudio.volume = 0.5
    coffeeAudio.volume = 0.5
    fireAudio.volume = 0.5

    // change volume

    function changeVolume() {
        forestAudio.volume = buttonVolumeForest.value / 100
        rainAudio.volume = buttonVolumeRain.value / 100
        coffeeAudio.volume = buttonVolumeCoffee.value / 100
        fireAudio.volume = buttonVolumeFire.value / 100
    }

    // pause & start sounds

    function Forest() {
        function start() {
            buttonForestSound.classList.add("On")
            forestAudio.play()
            groupForest.classList.add("On")
        }

        function pause() {
            forestAudio.pause()
            buttonForestSound.classList.remove("On")
            groupForest.classList.remove("On")
        }

        return {
            start,
            pause
        }
    }

    function Rain() {
        function start() {
            buttonRainSound.classList.add("On")
            rainAudio.play()      
            groupRain.classList.add("On")
        }

        function pause() {
            rainAudio.pause()
            buttonRainSound.classList.remove("On")
            groupRain.classList.remove("On")
        }

        return {
            start,
            pause
        }
    }

    function Coffee() {
        function start() {
            buttonCoffeeSound.classList.add("On")
            coffeeAudio.play()
            groupCoffee.classList.add("On")
        }
        function pause() {
            coffeeAudio.pause()
            buttonCoffeeSound.classList.remove("On")
            groupCoffee.classList.remove("On")
        }
        
        return {
            start,
            pause
        }
    }

    function Fire() {
        function start() {
            buttonFireSound.classList.add("On")
            fireAudio.play()
            groupFire.classList.add("On")
        }
        function pause() {
            fireAudio.pause()
            buttonFireSound.classList.remove("On")
            groupFire.classList.remove("On")
        }
        
        return {
            start,
            pause
        }
    }

    return {
        timeUp,
        pressButtonAudio,
        changeVolume,
        Forest,
        Rain,
        Coffee,
        Fire
    }
}