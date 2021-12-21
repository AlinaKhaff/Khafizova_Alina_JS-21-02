"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configServer_1 = require("./utils/configServer");
const uuid_1 = require("uuid");
const string_format_1 = __importDefault(require("string-format"));
const logger_1 = __importDefault(require("./logger"));
const loggerMessages_1 = __importDefault(require("./constants/loggerMessages"));
const context = require('request-context');
const { host, port, httpHeaders } = (0, configServer_1.getServerConfigs)();
const app = (0, express_1.default)();
app
    .use(express_1.default.json({ limit: '20mb' }))
    .use(context.middleware('request'))
    .use((req, res, next) => {
    context.set('uuid', (0, uuid_1.v4)());
    res.type('text/plain');
    httpHeaders.forEach((httpHeader) => res.set(httpHeader.option, httpHeader.value));
    next();
});
app.listen(port, host, () => {
    console.log((0, string_format_1.default)(loggerMessages_1.default.SERVER.ON, host, String(port)));
    logger_1.default.message((0, string_format_1.default)(loggerMessages_1.default.SERVER.ON, host, String(port)));
});
process.on('SIGINT', () => {
    console.log(loggerMessages_1.default.SERVER.OFF);
    logger_1.default.message(loggerMessages_1.default.SERVER.OFF);
});
