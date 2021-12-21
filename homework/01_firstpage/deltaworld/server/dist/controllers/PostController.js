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
const dumMyApi_1 = require("../constants/api/dumMyApi");
const logger_1 = __importDefault(require("../logger"));
const string_format_1 = __importDefault(require("string-format"));
const loggerMessages_1 = __importDefault(require("../constants/loggerMessages"));
const httpStatuses_1 = __importDefault(require("../constants/httpStatuses"));
const PostService_1 = __importDefault(require("../services/PostService"));
class PostController {
    static getPostsByUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.GET_POSTS_BY_USER.REQUEST, JSON.stringify(Object.assign(Object.assign({}, req.query), req.params))));
            const page = req.query.page ? Number(req.query.page) : dumMyApi_1.PageOptions.MIN;
            const limit = req.query.limit ? Number(req.query.limit) : dumMyApi_1.LimitOptions.MAX;
            if (page < dumMyApi_1.PageOptions.MIN) {
                const message = `Minimum page size ${dumMyApi_1.PageOptions.MIN}`;
                const status = httpStatuses_1.default.BAD_REQUEST;
                logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_POSTS_BY_USER.RESPONSE.ERROR, String(status), message));
                return res.status(status).json({ status, error: { message } });
            }
            if (limit < dumMyApi_1.LimitOptions.MIN || limit > dumMyApi_1.LimitOptions.MAX) {
                const message = `Minimum limit size ${dumMyApi_1.LimitOptions.MIN} and maximum ${dumMyApi_1.LimitOptions.MAX}`;
                const status = httpStatuses_1.default.BAD_REQUEST;
                logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_POSTS_BY_USER.RESPONSE.ERROR, String(status), message));
                return res.status(status).json({ status, error: { message } });
            }
            try {
                const responseBody = JSON.stringify(Object.assign({ status: httpStatuses_1.default.OK }, yield PostService_1.default.getPostsByUser(req.params.id, page, limit)));
                logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.GET_POSTS_BY_USER.RESPONSE.SUCCESS, responseBody));
                res.status(httpStatuses_1.default.OK).send(responseBody);
            }
            catch (e) {
                const message = (e.message === String(httpStatuses_1.default.BAD_REQUEST)) ? 'User not found' : 'Internal server error';
                const status = (e.message === String(httpStatuses_1.default.BAD_REQUEST)) ?
                    httpStatuses_1.default.BAD_REQUEST : httpStatuses_1.default.SERVER_ERROR;
                logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_POSTS_BY_USER.RESPONSE.ERROR, String(status), message));
                res.status(status).json({ status, error: { message } });
            }
        });
    }
    static getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.GET_POST_ID.REQUEST, JSON.stringify(req.params)));
            try {
                const responseBody = JSON.stringify({
                    status: httpStatuses_1.default.OK, data: Object.assign({}, yield PostService_1.default.getPost(req.params.id))
                });
                logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.GET_POST_ID.RESPONSE.SUCCESS, responseBody));
                res.status(httpStatuses_1.default.OK).send(responseBody);
            }
            catch (e) {
                const message = (e.message === String(httpStatuses_1.default.BAD_REQUEST)) ? 'Post not found' : 'Internal server error';
                const status = (e.message === String(httpStatuses_1.default.BAD_REQUEST)) ?
                    httpStatuses_1.default.BAD_REQUEST : httpStatuses_1.default.SERVER_ERROR;
                logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_POST_ID.RESPONSE.ERROR, String(status), message));
                res.status(status).json({ status, error: { message } });
            }
        });
    }
    static getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.GET_POST_LIST.REQUEST, JSON.stringify(req.query)));
            const page = req.query.page ? Number(req.query.page) : dumMyApi_1.PageOptions.MIN;
            const limit = req.query.limit ? Number(req.query.limit) : dumMyApi_1.LimitOptions.MAX;
            if (page < dumMyApi_1.PageOptions.MIN) {
                const message = `Minimum page size ${dumMyApi_1.PageOptions.MIN}`;
                const status = httpStatuses_1.default.BAD_REQUEST;
                logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_POST_LIST.RESPONSE.ERROR, String(status), message));
                return res.status(status).json({ status, error: { message } });
            }
            if (limit < dumMyApi_1.LimitOptions.MIN || limit > dumMyApi_1.LimitOptions.MAX) {
                const message = `Minimum limit size ${dumMyApi_1.LimitOptions.MIN} and maximum ${dumMyApi_1.LimitOptions.MAX}`;
                const status = httpStatuses_1.default.BAD_REQUEST;
                logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_POST_LIST.RESPONSE.ERROR, String(status), message));
                return res.status(status).json({ status, error: { message } });
            }
            try {
                const responseBody = JSON.stringify(Object.assign({ status: httpStatuses_1.default.OK }, yield PostService_1.default.getPosts(page, limit)));
                logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.GET_POST_LIST.RESPONSE.SUCCESS, responseBody));
                res.status(httpStatuses_1.default.OK).send(responseBody);
            }
            catch (e) {
                const message = 'Internal server error';
                const status = httpStatuses_1.default.BAD_REQUEST;
                logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_POST_LIST.RESPONSE.ERROR, String(status), message));
                res.status(status).json({ status, error: { message } });
            }
        });
    }
}
exports.default = PostController;
