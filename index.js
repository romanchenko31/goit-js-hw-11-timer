const valueDays = document.querySelector('.timer');
const fieldWithDay = valueDays.firstElementChild;
const fieldWithHour = fieldWithDay.nextElementSibling;
const fieldWithMinutes = fieldWithHour.nextElementSibling;
const fieldWithSecond = fieldWithMinutes.nextElementSibling;

let day = fieldWithDay.firstElementChild;
let hour = fieldWithHour.firstElementChild;
let minutes = fieldWithMinutes.firstElementChild;
let second = fieldWithSecond.firstElementChild;


class CountdownTimer {
  constructor({ selector: timerName, targetDate: data }) {
    this.timerName = timerName;
    this.targetDate = data;

  }

  countTargetTimer() {
    const targetMls = this.targetDate.getTime();
    const currentMls = new Date().getTime();
    let waitTimeMls = currentMls - targetMls;

    setInterval(() => {      
      waitTimeMls-=1000;
      const { days, hours, mins, secs } = countTime(waitTimeMls);   
      day.textContent = days;
      hour.textContent = hours;
      minutes.textContent = mins;
      second.textContent = secs;
    }, 1000);
   } 
} 



const targetDateTimer = new CountdownTimer({selector: '#timer-1', targetDate: new Date('Jul 17, 2021'),});
targetDateTimer.countTargetTimer();


function countTime(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}


function pad(value) {
  return String(value).padStart(2, '0');
}

