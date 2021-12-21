"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simple_node_logger_1 = __importDefault(require("simple-node-logger"));
const configServer_1 = require("./utils/configServer");
const context = require('request-context');
(0, configServer_1.checkExistLogsDirectory)();
const loggerOptions = (0, configServer_1.getLoggerConfigs)();
const log = simple_node_logger_1.default.createRollingFileLogger(loggerOptions);
const logger = Object.assign(Object.assign({}, log), { message: (message) => log.info(message), info: (message) => log.info(context.get('uuid'), ' ', message), error: (message) => log.error(context.get('uuid'), ' ', message), fatal: (message) => log.fatal(context.get('uuid'), ' ', message) });
exports.default = logger;
