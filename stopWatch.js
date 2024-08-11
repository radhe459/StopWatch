
let display = document.getElementById("display")
let startTime = 0
let elapseTime = 0
let timer = null
let isRunning = false

function start() {

    if (!isRunning) {
        startTime = Date.now() - elapseTime;
        isRunning = true;
        timer = setInterval(update, 10)
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer)
        elapseTime = Date.now() - startTime;
        isRunning = false
    }
}

function reset() {
    clearInterval(timer)
    elapseTime = 0
    startTime = 0
    isRunning = false
    display.textContent = "00:00:00:00"
}

function update() {
    elapseTime = Date.now() - startTime;
    let hour = Math.floor(elapseTime / (1000 * 60 * 60))
    let minute = Math.floor(elapseTime / (1000 * 60))
    let second = Math.floor(elapseTime / 1000)
    let milisec = Math.floor(elapseTime % 1000 / 10);
    hour = hour.toString().padStart(2, 0);
    minute = minute.toString().padStart(2, 0);
    second = second.toString().padStart(2, 0);
    milisec = milisec.toString().padStart(2, 0);
    display.textContent = `${hour}:${minute}:${second}:${milisec}`
}