"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../utils/common");
const userMapper_1 = __importDefault(require("./userMapper"));
class CommentMapper {
    static getConvertComments(commentList) {
        const data = commentList.data.map((item) => ({
            id: item.id,
            message: item.message,
            image: (0, common_1.getConvertDateOfPublish)(item.publishDate),
            publishDate: (0, common_1.getConvertDateOfPublish)(item.publishDate),
            owner: userMapper_1.default.getConvertUserPreview(item.owner)
        }));
        const { page, limit, total } = commentList;
        return { data, page, limit, total };
    }
}
exports.default = CommentMapper;
