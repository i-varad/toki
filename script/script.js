const timeDisplay = document.querySelector('.stopwatch-time');
const startButton = document.querySelector('.start')
const resetButton = document.querySelector('.reset')


let startTime = null;
let elapsedTime = 0;
let timeInterval = null;
let isRunning = false;


startButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetTimer);


// Toggle between start and pause
function toggleTimer() {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}


function startTimer() {


    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(updateDisplay, 1000);

    startButton.textContent = 'Pause';
    startButton.style.backgroundColor = '#ff9500';

    isRunning = true;
    console.log('Timer Started !');
}

function pauseTimer() {
    // Stop the interval
    clearInterval(timeInterval);
    
    // Change button to "Start" (to resume)
    startButton.textContent = 'Start';
    startButton.style.backgroundColor = '#7533ff'; // Back to your accent color
    
    isRunning = false;
    console.log('Timer paused! Click Start to resume.');
}

function resetTimer(){
    clearInterval(timeInterval);
    
    startTime = null;
    elapsedTime = 0;
    isRunning = false;

    startButton.textContent = 'Start';
    startButton.style.backgroundColor = '#7533ff';

    timeDisplay.textContent = '00:00:00';
    console.log('Timer reset!');
}


function updateDisplay(){
    if(startTime){
        elapsedTime = Date.now() - startTime;

        const totalSeconds = Math.floor(elapsedTime/1000);

        timeDisplay.textContent = formatTime(totalSeconds);
    }
}

function formatTime(totalSeconds){
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60) ;
    const seconds = totalSeconds % 60;


    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

timeDisplay.textContent = '00:00:00';
