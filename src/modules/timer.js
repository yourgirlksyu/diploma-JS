const timer = (discount) => {
    const timerDaysBoxs = document.querySelectorAll('.count_1')
    const timerHoursBoxs = document.querySelectorAll('.count_2')
    const timerMinutesBoxs = document.querySelectorAll('.count_3')
    const timerSecondsBoxs = document.querySelectorAll('.count_4')

    const timerDaysBoxF = timerDaysBoxs[0]
    const timerHoursBoxF = timerHoursBoxs[0]
    const timerMinutesBoxF = timerMinutesBoxs[0]
    const timerSecondsBoxF = timerSecondsBoxs[0]
    
    const timerDays = timerDaysBoxF.lastElementChild
    const timerHours = timerHoursBoxF.lastElementChild
    const timerMinutes = timerMinutesBoxF.lastElementChild
    const timerSeconds = timerSecondsBoxF.lastElementChild

    let intervalID

    const getTimeRemaining = (discount) => {
        let dateStop = new Date(discount).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor(timeRemaining / 60 / 60) % 24
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining(discount)

        timerDays.textContent = getTime.days
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds

        if (getTime.timeRemaining > 0) {
            intervalID = setInterval(() => {
                            updateClock()
                        }, 1000);
        } else if (getTime.timeRemaining <= 0) {
            timerDays.textContent = '00'
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'
            clearInterval(intervalID)
        }
        const zeroToNumber = () => {
            if (getTime.days < 10 && getTime.days >= 0) {
                timerDays.textContent = '0' + getTime.days
            } 
            if (getTime.hours < 10 && getTime.days >= 0) {
                timerHours.textContent = '0' + getTime.hours
            }
            if (getTime.minutes < 10 && getTime.days >= 0) {
                timerMinutes.textContent = '0' + getTime.minutes
            }
            if (getTime.seconds < 10 && getTime.days >= 0) {
                timerSeconds.textContent = '0' + getTime.seconds
            }
        }
        const timeEqualify = () => {
            timerDaysBoxs[1].lastElementChild.textContent = timerDays.textContent
            timerHoursBoxs[1].lastElementChild.textContent = timerHours.textContent
            timerMinutesBoxs[1].lastElementChild.textContent = timerMinutes.textContent
            timerSecondsBoxs[1].lastElementChild.textContent = timerSeconds.textContent
        }
        zeroToNumber()
        timeEqualify()
    }
    updateClock()
}
export default timer