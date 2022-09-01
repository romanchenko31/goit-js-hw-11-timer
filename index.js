
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.getDay = document.querySelector(`${selector} .value[data-value="days"]`);
    this.getHour = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.getMinutes = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.getSecond = document.querySelector(`${selector} .value[data-value="secs"]`);
    this.targetDate = targetDate;
    return this.countTargetTimer();
  }

 
  countTargetTimer() {
    const targetMls = this.targetDate.getTime();
    const currentMls = new Date().getTime();
    let waitTimeMls = currentMls - targetMls;

    setInterval(() => {      
      waitTimeMls-=1000;
      const { days, hours, mins, secs } = this.countTime(waitTimeMls);   
      this.setTextContent({ days, hours, mins, secs });
    }, 1000);
} 
   
 setTextContent({ days, hours, mins, secs }) {
      this.getDay.textContent = days;
      this.getHour.textContent = hours;
      this.getMinutes.textContent = mins;
      this.getSecond.textContent = secs;
 }
  
    countTime(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      return { days, hours, mins, secs };
}


pad(value) {
  return String(value).padStart(2, '0');
}

} 



const targetDateTimer = new CountdownTimer({selector: '#timer-1', targetDate: new Date('Jul 17, 2021'),});






