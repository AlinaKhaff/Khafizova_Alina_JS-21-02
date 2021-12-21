"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExistLogsDirectory = exports.getApiKeysConfigs = exports.getLoggerConfigs = exports.getServerConfigs = void 0;
const fs_1 = __importDefault(require("fs"));
const path = './config.json';
const checkExistLogsDirectory = () => {
    const logsDirectory = getLoggerConfigs().logDirectory;
    if (!fs_1.default.existsSync(logsDirectory)) {
        fs_1.default.mkdirSync(logsDirectory);
    }
};
exports.checkExistLogsDirectory = checkExistLogsDirectory;
const getServerConfigs = () => {
    return JSON.parse(fs_1.default.readFileSync(path, 'utf8')).server;
};
exports.getServerConfigs = getServerConfigs;
const getLoggerConfigs = () => {
    return JSON.parse(fs_1.default.readFileSync(path, 'utf8')).logger;
};
exports.getLoggerConfigs = getLoggerConfigs;
const getApiKeysConfigs = () => {
    return JSON.parse(fs_1.default.readFileSync(path, 'utf8')).apiKeys;
};
exports.getApiKeysConfigs = getApiKeysConfigs;
