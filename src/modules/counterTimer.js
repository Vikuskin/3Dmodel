function counterTimer(deadline) {
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

  function getTimeRemaining() {
    let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = '' + Math.floor(timeRemaining % 60),
      minutes = '' + Math.floor((timeRemaining / 60) % 60),
      hours = '' + Math.floor(timeRemaining / 60 / 60);
    if (hours.length < 2) {
      hours = '0' + hours;
    }
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    return { timeRemaining, hours, minutes, seconds };
  }

  function updateClock() {
    const timer = getTimeRemaining();
    timerHours.textContent = timer.hours;
    timerMinutes.textContent = timer.minutes;
    timerSeconds.textContent = timer.seconds;

    if (timer.timeRemaining > 0) {
      const idInterval = setInterval(() => {
        updateClock();
        clearInterval(idInterval);
      }, 1000);
    } else {
      clearInterval(idInterval);
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  }
  const idInterval = setInterval(() => {
    updateClock();
    clearInterval(idInterval);
  }, 1000);
}

export default counterTimer;
