"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dymMyApi_1 = require("../utils/api/dymMyApi");
const loggerMessages_1 = __importDefault(require("../constants/loggerMessages"));
const logger_1 = __importDefault(require("../logger"));
const string_format_1 = __importDefault(require("string-format"));
const userMapper_1 = __importDefault(require("../mapper/userMapper"));
const httpStatuses_1 = __importDefault(require("../constants/httpStatuses"));
const imgbb_1 = require("../utils/api/imgbb");
class UserService {
    static updateUser(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            if (body.picture) {
                response = yield (0, imgbb_1.fetchUploadImage)(body.picture);
                body.picture = response.data.data.url;
                response = yield (0, dymMyApi_1.fetchUpdateUser)(id, body);
            }
            else {
                response = yield (0, dymMyApi_1.fetchUpdateUser)(id, body);
            }
            switch (response.status) {
                case httpStatuses_1.default.OK: {
                    logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.UPDATE_USER.FETCH.SUCCESS, String(response.status)));
                    return userMapper_1.default.getConvertUser(yield response.data);
                }
                case httpStatuses_1.default.BAD_REQUEST: {
                    logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.UPDATE_USER.FETCH.ERROR, String(response.status)));
                    throw new Error(String(httpStatuses_1.default.BAD_REQUEST));
                }
                default: {
                    logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.UPDATE_USER.FETCH.ERROR, String(response.status), response.statusText));
                    throw new Error(String(httpStatuses_1.default.SERVER_ERROR));
                }
            }
        });
    }
    static createUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, dymMyApi_1.fetchCreateUser)(body);
            switch (response.status) {
                case httpStatuses_1.default.OK: {
                    logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.CREATE_USER.FETCH.SUCCESS, String(response.status)));
                    return userMapper_1.default.getConvertUserAuth(yield response.data);
                }
                case httpStatuses_1.default.BAD_REQUEST: {
                    logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.UPDATE_USER.FETCH.ERROR, String(response.status)));
                    throw new Error(String(httpStatuses_1.default.BAD_REQUEST));
                }
                default: {
                    logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.CREATE_USER.FETCH.ERROR, String(response.status), response.statusText));
                    throw new Error(String(httpStatuses_1.default.SERVER_ERROR));
                }
            }
        });
    }
    static loginUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, dymMyApi_1.fetchUser)(id);
            switch (response.status) {
                case httpStatuses_1.default.OK: {
                    logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.GET_USER_LOGIN.FETCH.SUCCESS, String(response.status)));
                    return userMapper_1.default.getConvertUserAuth(yield response.data);
                }
                case httpStatuses_1.default.BAD_REQUEST: {
                    logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_USER_LOGIN.FETCH.ERROR, String(response.status)));
                    throw new Error(String(httpStatuses_1.default.BAD_REQUEST));
                }
                default: {
                    logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_USER_LOGIN.FETCH.ERROR, String(response.status), response.statusText));
                    throw new Error(String(httpStatuses_1.default.SERVER_ERROR));
                }
            }
        });
    }
    static getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, dymMyApi_1.fetchUser)(id);
            switch (response.status) {
                case httpStatuses_1.default.OK: {
                    logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.GET_USER_ID.FETCH.SUCCESS, String(response.status)));
                    return userMapper_1.default.getConvertUser(yield response.data);
                }
                case httpStatuses_1.default.BAD_REQUEST: {
                    logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_USER_ID.FETCH.ERROR, String(response.status)));
                    throw new Error(String(httpStatuses_1.default.BAD_REQUEST));
                }
                default: {
                    logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_USER_ID.FETCH.ERROR, String(response.status), response.statusText));
                    throw new Error(String(httpStatuses_1.default.SERVER_ERROR));
                }
            }
        });
    }
    static getUsers(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, dymMyApi_1.fetchUsers)(page, limit);
            switch (response.status) {
                case httpStatuses_1.default.OK: {
                    logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.GET_USER_LIST.FETCH.SUCCESS, String(response.status)));
                    return userMapper_1.default.getConvertUsersList(yield response.data);
                }
                default: {
                    logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_USER_LIST.FETCH.ERROR, String(response.status), response.statusText));
                    throw new Error(loggerMessages_1.default.GET_USER_LIST.FETCH.ERROR);
                }
            }
        });
    }
}
exports.default = UserService;
