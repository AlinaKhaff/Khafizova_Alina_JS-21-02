"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../utils/common");
const userMapper_1 = __importDefault(require("./userMapper"));
class PostMapper {
    static getConvertPost(post) {
        return ({
            id: post.id,
            text: post.text,
            image: post.image,
            publishDate: (0, common_1.getConvertDateOfPublish)(post.publishDate),
            owner: userMapper_1.default.getConvertUserPreview(post.owner)
        });
    }
    static getConvertUserPost(post) {
        return ({
            id: post.id,
            text: post.text,
            image: post.image,
            publishDate: (0, common_1.getConvertDateOfPublish)(post.publishDate),
        });
    }
    static getConvertUsersPosts(postList) {
        const data = postList.data.map((item) => this.getConvertUserPost(item));
        const { page, limit, total } = postList;
        return { data, page, limit, total };
    }
    static getConvertPosts(postList) {
        const data = postList.data.map((item) => this.getConvertPost(item));
        const { page, limit, total } = postList;
        return { data, page, limit, total };
    }
}
exports.default = PostMapper;
