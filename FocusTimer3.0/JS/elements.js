// elements controls
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSetTime = document.querySelector(".setTime")
const buttonAddTime = document.querySelector(".addTime")
const buttonReduceTime = document.querySelector(".reduceTime")
// elements sound
const groupForest = document.querySelector(".soundGroupForest")
const groupRain = document.querySelector(".soundGroupRain")
const groupCoffee = document.querySelector(".soundGroupCoffee")
const groupFire = document.querySelector(".soundGroupFire")
const buttonForestSound = document.querySelector(".forestSound")
const buttonRainSound = document.querySelector(".rainSound")
const buttonCoffeeSound = document.querySelector(".coffeeShopSound")
const buttonFireSound = document.querySelector(".fireSound")
const buttonVolumeForest = document.querySelector("#volumeSliderForest")
const buttonVolumeRain = document.querySelector("#volumeSliderRain")
const buttonVolumeCoffee = document.querySelector("#volumeSliderCoffee")
const buttonVolumeFire = document.querySelector("#volumeSliderFire")
// elements light/dark modes
const buttonLightMode = document.querySelector(".lightmodeButton")
const buttonDarkMode = document.querySelector(".darkmodeButton")

export {
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
    groupForest,
    groupRain,
    groupCoffee,
    groupFire
}