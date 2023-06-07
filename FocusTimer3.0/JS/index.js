import { AlertError } from "./alert-error.js"
import Sounds from "./sounds.js"
import toggleMode from "./toggle-mode.js"
import Timer from "./timer.js"
import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSetTime,
    buttonAddTime,
    buttonReduceTime,
    buttonForestSound,
    buttonRainSound,
    buttonCoffeeSound,
    buttonFireSound,
    buttonLightMode,
    buttonDarkMode,
    buttonVolumeForest,
    buttonVolumeRain,
    buttonVolumeCoffee,
    buttonVolumeFire,
} from "./elements.js"

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonSetTime,
    buttonStop,
    AlertError
})

const sounds = Sounds()

// Light-Dark Mode events

buttonDarkMode.addEventListener("click", toggleMode)
buttonLightMode.addEventListener("click", toggleMode)

// controls events

buttonAddTime.addEventListener("click", function(){
    sounds.pressButtonAudio()
    timer.addTime()
})

buttonReduceTime.addEventListener("click", function(){
    sounds.pressButtonAudio()
    timer.reduceTime()
})

buttonPlay.addEventListener("click", function(){   
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide") 
    buttonSetTime.classList.add("hide")
    buttonStop.classList.remove("hide") 
    
    sounds.pressButtonAudio()
    timer.countdown()
})

buttonPause.addEventListener("click", function(){
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide") 
    timer.hold()
    sounds.pressButtonAudio()
})

buttonStop.addEventListener("click", function(){   
    sounds.pressButtonAudio()
    timer.resetTimer()
    timer.resetControls() 
})

buttonSetTime.addEventListener("click", function(){
    sounds.pressButtonAudio()
    timer.setTime()
})

// Sound events

const forest = sounds.Forest()
const rain = sounds.Rain()
const coffee = sounds.Coffee()
const fire = sounds.Fire()

buttonVolumeForest.addEventListener("change", sounds.changeVolume)
buttonVolumeRain.addEventListener("change", sounds.changeVolume)
buttonVolumeCoffee.addEventListener("change", sounds.changeVolume)
buttonVolumeFire.addEventListener("change", sounds.changeVolume)

buttonForestSound.addEventListener("click", function(){
    if(buttonForestSound.classList.contains("On") ){
        forest.pause()
    } else {
        forest.start()
        rain.pause()
        coffee.pause()
        fire.pause()
    } 
})

buttonRainSound.addEventListener("click", function(){
    if(buttonRainSound.classList.contains("On")) {
        rain.pause()
    } else {
        forest.pause()
        rain.start()
        coffee.pause()
        fire.pause()
    }
})

buttonCoffeeSound.addEventListener("click", function(){
    if(buttonCoffeeSound.classList.contains("On")) {
        coffee.pause()
    } else {
        forest.pause()
        rain.pause()
        coffee.start()
        fire.pause()
    }
})

buttonFireSound.addEventListener("click", function(){
    if(buttonFireSound.classList.contains("On")) {
        fire.pause()
    } else {
        forest.pause()
        rain.pause()
        coffee.pause()
        fire.start()
    }
})