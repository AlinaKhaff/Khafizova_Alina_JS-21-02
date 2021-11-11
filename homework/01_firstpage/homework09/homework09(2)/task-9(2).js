const second = document.getElementById("second");
const secondText = document.getElementById("text");
let counterdown = +second.dataset.value;

second.innerText = (counterdown > 0) ? counterdown.toString() : 0;
secondText.innerText = declensionTextSeconds(counterdown);

timerRedirection(counterdown, second, secondText, "https://maxima.life");

function timerRedirection(counterdown, secondElement, secondTextElement,  url) {
    if(counterdown > 0) {
        let interval = setInterval(() => {
            if(--counterdown <= 0 ) {
                clearInterval(interval);
                location.href = url;
            }
            secondElement.innerText = counterdown.toString();
            secondTextElement.innerText = declensionTextSeconds(counterdown);
        }, 1000);
    } else {
        location.href = url;
    }
}

function declensionTextSeconds(number) {
    const keysText = [2, 0, 1, 1, 1, 2];
    const text = ['секунду', 'секунды', 'секунд'];
    return text[(number % 100 > 4 && number % 100 < 20) ? 2 : keysText[(number % 10 < 5) ? number % 10 : 5]];
}