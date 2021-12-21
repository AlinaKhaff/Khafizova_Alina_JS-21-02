"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = exports.getConvertUserFullName = exports.getConvertDateOfPublish = void 0;
const getConvertDateOfPublish = (dateTime) => {
    const date = new Date(dateTime);
    const months = [
        'янв.', 'фев.', 'марта', 'апр.', 'мая', 'июня', 'июля', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'
    ];
    return `${date.getDate()} ${months[date.getMonth()]}${new Date().getFullYear() !== date.getFullYear() ? ` ${date.getFullYear()} г.` : ''} в ${date.getHours()}:${date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes()}`;
};
exports.getConvertDateOfPublish = getConvertDateOfPublish;
const getConvertUserFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
exports.getConvertUserFullName = getConvertUserFullName;
const getDate = (dateTime) => {
    const date = new Date(dateTime);
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};
exports.getDate = getDate;
