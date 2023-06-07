import Sounds from "./sounds.js"
const sounds = Sounds()

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonSetTime,
    buttonStop,
    AlertError
}){
    let timerTimeOut
    let newMinutes
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    
    function resetTimer() {
        updateDisplay(minutes, seconds)
        clearTimeout(timerTimeOut)
    }

    function updateDisplay(minutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function countdown() {
        timerTimeOut = setTimeout(function(){
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)

            AlertError.close()

            if(minutes <= 0 && seconds <= 0){
                sounds.timeUp()
                resetTimer()
                resetControls()
                return
            } 

            if (typeof minutes === 'number' && isNaN(minutes)) {
                hold()
                resetControls() 
                setTime()
                return
            } 

            if(seconds <= 0 ){
                seconds = 60
                updateDisplay(--minutes, seconds)
            }
            updateDisplay(minutes, --seconds)     
            countdown()
        }, 1000)
    }

    function reduceTime(){
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        
        if(minutes <= 0){
            AlertError.open()
            return
        }

        AlertError.close()
        
        let remainder = minutes % 5
        if(remainder == 0) {
            updateDisplay(minutes - 5, seconds)
        } else {
            updateDisplay(minutes - remainder, seconds)
        }
    }

    function addTime (){
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        AlertError.close()

        let remainder = minutes % 5
        let oppositeRemainder = 5 - remainder

        if(remainder == 0) {
            updateDisplay(minutes + 5, seconds)
        } else {
            updateDisplay(minutes + oppositeRemainder, seconds)
        }   
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    function setTime() {
        newMinutes = prompt("Insira o tempo de estudo:")
        if (newMinutes === null || newMinutes === undefined || newMinutes === NaN) {
            return
        } else {
            updateDisplay(newMinutes, seconds)
            minutes = newMinutes
        }
    }

    function resetControls() {
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide") 
        buttonSetTime.classList.remove("hide")
        buttonStop.classList.add("hide") 
    }
    
    return {
        resetTimer,
        updateDisplay,
        countdown,
        reduceTime,
        addTime,
        hold,
        setTime,
        resetControls
    }
}