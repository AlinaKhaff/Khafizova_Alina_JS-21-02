const buttonTime = document.getElementById("button_time");
const buttonInter = document.getElementById("button_inter");

const timeTimeout = document.getElementById("time_timeout");
const timeInterval = document.getElementById("time_interval");
let timeout, interval;

buttonTime.addEventListener("click", () => {
    clearTimeout(timeout);
    let i = +document.getElementById("i_time").value,
        j = +document.getElementById("j_time").value;
    if (i < j) {
        counterTimeout(timeTimeout, i, j, true);
    } else if (i > j) {
        counterTimeout(timeTimeout, i, j, false);
    } else {
        timeTimeout.innerText = i.toString();
    }
});

function counterTimeout(element, i, j, isUp = true) {
    startTimeout();

    function startTimeout() {
        element.innerText = i.toString();
        if (i !== j) {
            i = isUp ? i + 1 : i - 1;
            timeout = setTimeout(startTimeout, 1000);
        }
    }
}

buttonInter.addEventListener("click", () => {
    clearInterval(interval);
    let i = +document.getElementById("i_inter").value,
        j = +document.getElementById("j_inter").value;
    if (i < j) {
        counterInterval(timeInterval, i, j, true);
    } else if (i > j) {
        counterInterval(timeInterval, i, j, false);
    } else {
        timeInterval.innerText = i.toString();
    }
});


function counterInterval(element, i, j, isUp = true) {
    interval = setInterval(() => {
        element.innerText = i.toString();
        if (i === j) {
            clearInterval(interval);
        }
        i = isUp ? i + 1 : i - 1;
    }, 1000);
}