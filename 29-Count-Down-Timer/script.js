const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

let countdown;

function timer(seconds){

    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft <= 0){
            clearInterval(countdown);
            return
        }
        displayTimeLeft(secondsLeft);
    },1000)
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds/60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timeLeft.textContent = display;
}

function displayEndTime(then){
    const time = new Date(then);
    const endHours = time.getHours();
    const endMinutes = time.getMinutes();
    endTime.textContent = `Be back at ${endHours > 12 ? endHours - 12: endHours}:${endMinutes < 10 ? '0': ''}${endMinutes}`
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => {
    button.addEventListener('click',startTimer);
})

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
    
    
})