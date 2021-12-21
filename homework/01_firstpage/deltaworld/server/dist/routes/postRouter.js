"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PostController_1 = __importDefault(require("../controllers/PostController"));
const postRouter = (0, express_1.default)();
postRouter.get('/post', PostController_1.default.getPosts);
postRouter.get('/post/:id', PostController_1.default.getPost);
postRouter.get('/user/:id/post', PostController_1.default.getPostsByUser);
exports.default = postRouter;
