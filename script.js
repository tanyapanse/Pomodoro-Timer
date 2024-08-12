const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timer = document.getElementById("timer");

let interval;
let leftoverTime = 1500;

function update() {
    let minutes = Math.floor(leftoverTime / 60);
    let seconds = leftoverTime % 60;
    let displayTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timer.innerHTML = displayTime;
}

function startTimer() {
    interval = setInterval(() => {
        leftoverTime--;
        update();
        if (leftoverTime === 0) {
            clearInterval(interval);
            leftoverTime = 1500;
            update()
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    leftoverTime = 1500;
    update();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);