// utilization of setInterval() andsetTimeout() method


const clock = document.getElementById('clock');
const stopTimer = document.getElementById('stop-timer');

const showTime = () => {
    const currentTime = new Date();
    clock.innerText = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    
}

const Timer = setInterval(showTime, 1000);

stopTimer.addEventListener('click', () => {
    clearInterval(Timer);
})

