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
const logger_1 = __importDefault(require("../logger"));
const string_format_1 = __importDefault(require("string-format"));
const loggerMessages_1 = __importDefault(require("../constants/loggerMessages"));
const commentMapper_1 = __importDefault(require("../mapper/commentMapper"));
const httpStatuses_1 = __importDefault(require("../constants/httpStatuses"));
class CommentService {
    static getCommentsByPost(id, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, dymMyApi_1.fetchCommentsByPost)(id, page, limit);
            switch (response.status) {
                case httpStatuses_1.default.OK: {
                    logger_1.default.info((0, string_format_1.default)(loggerMessages_1.default.GET_COMMENTS_BY_POST.FETCH.SUCCESS, response.status));
                    return commentMapper_1.default.getConvertComments(yield response.data);
                }
                default: {
                    logger_1.default.error((0, string_format_1.default)(loggerMessages_1.default.GET_COMMENTS_BY_POST.FETCH.ERROR, response.status, response.statusText));
                    throw new Error(loggerMessages_1.default.GET_COMMENTS_BY_POST.FETCH.ERROR);
                }
            }
        });
    }
}
exports.default = CommentService;
