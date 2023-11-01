function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourElement = document.getElementById("hour");
    const minuteElement = document.getElementById("minute");
    const secondElement = document.getElementById("second");
  
    hourElement.textContent = formatTime(hour);
    minuteElement.textContent = formatTime(minute);
    secondElement.textContent = formatTime(second);
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  