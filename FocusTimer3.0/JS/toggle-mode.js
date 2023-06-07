import { buttonPlay,
    buttonPause,
    buttonStop,
    buttonSetTime,
    buttonAddTime,
    buttonReduceTime,
    buttonLightMode,
    buttonDarkMode,
    groupForest,
    groupRain,
    groupCoffee,
    groupFire
    } from "./elements.js"

export default function toggleMode() {
    buttonLightMode.classList.toggle("modeOff")
    buttonDarkMode.classList.toggle("modeOff")

    groupForest.classList.toggle("darkmode")
    groupRain.classList.toggle("darkmode")
    groupCoffee.classList.toggle("darkmode")
    groupFire.classList.toggle("darkmode")

    document.querySelector("main").classList.toggle("darkmode")
    document.querySelector(".timer").classList.toggle("darkmode")
    
    buttonPlay.classList.toggle("darkmode")
    buttonPause.classList.toggle("darkmode")
    buttonStop.classList.toggle("darkmode")
    buttonSetTime.classList.toggle("darkmode")
    buttonAddTime.classList.toggle("darkmode")
    buttonReduceTime.classList.toggle("darkmode")
}