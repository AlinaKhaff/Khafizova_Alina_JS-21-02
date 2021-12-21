"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CommentController_1 = __importDefault(require("../controllers/CommentController"));
const commentRouter = (0, express_1.default)();
commentRouter.get('/post/:id/comment', CommentController_1.default.getCommentsByPost);
exports.default = commentRouter;
