// Задание 1
const initTask1 = function () {
    const result = prompt("Введите две строки через запятую.", ["Строка 1, Строка 2"]);
    //Разделяем строку на массивы используя разделитель запятую
    const arr = result.split(",");
    if (arr.length != 2) {
        alert("Необходимо ввести две строки через запятую");
        return;
    }
    alert(arr[0].includes(arr[1]));
}
// Задание 2

const initTask2 = function () {
    const str = prompt("Введите строку", ["Очень длинная строка"]);
    const num = parseInt(prompt("Введите число", ["5"]));
    if (isNaN(num) || str.length < num) {
        alert("Вы ошиблись при вводе");
        return;
    }
    const res = str.substring(num) + "...";
    alert(res);
}

// Задание 3

const initTask3 = function () {
    const data = '12/02/2021 12-00';
    const regex1 = new RegExp('[\/]');
    let res = data.replace(regex1, '.');
    res = res.replace(regex1, '.');
    alert('first regex:' + res);
    const regex2 = new RegExp('[-]');
    res = res.replace(regex2, ':');
    alert('second regex:' + res);
}

// Задание 4

const initTask4 = function () {
    const name = prompt("Введите ваше ФИО", ["Иванов Иван Иванович"]);
    const regExp = /^[А-ЯЁ][а-яё]*\s[А-ЯЁ][а-яё]*(\s[А-ЯЁ][а-яё]*((вич)|(вна)))?$/;
    alert(regExp.test(name));
}


// Задание 5

const initTask5 = function () {
    const stroka = 'PascalCaseExampleString';
    alert(stroka.split(/(?=[A-Z])/).join("_").toLowerCase());
}

// Задание 6

const initTask6 = function () {
    const html = `1-молоко
2- чай <!-- sdf -->
3- с<!-- 12 -->ок <!-- sd -->`
    const htmlComments = html.match(/(<!--[\S\s]+?-->)/g);
    const comms = (htmlComments != null) ?
        htmlComments.map(value => {
            return value.replace(/^<!--/, "").replace(/-->$/, "")
        }) :
        null;
    alert(JSON.stringify(comms));
}

// Задание 7

const initTask7 = function () {
    const int = '1 f b 3 c 23 10 15 ab 12 20.6 5';
    alert(int.match(/[+-]?\d+(\.?\d+)?/g));
}
// Задание 8

const initTask8 = function () {
    const check = function (char) {
        return /^((([0-9A-z]{4}) ){3}([0-9A-z]{4}))|((([0-9A-z]{4})-){3}([0-9A-z]{4}))$/.test(char);
    }
    let char = prompt("Введите идентификатор", ["1234-abcd-12ab-acbd"]);
    while (!check(char)) {
        alert("Неверный идентификатор");
        char = prompt("Введите идентификатор", ["1234-abcd-12ab-acbd"]);
    }
    alert("Ведётся поиск...");
}