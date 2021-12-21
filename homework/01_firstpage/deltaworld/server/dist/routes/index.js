"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const httpStatuses_1 = __importDefault(require("../constants/httpStatuses"));
const userRouter_1 = __importDefault(require("./userRouter"));
const postRouter_1 = __importDefault(require("./postRouter"));
const commentRouter_1 = __importDefault(require("./commentRouter"));
const routes = (0, express_1.default)();
routes.use('', userRouter_1.default);
routes.use('', postRouter_1.default);
routes.use('', commentRouter_1.default);
routes.use('*', (req, res) => {
    res.status(httpStatuses_1.default.NOT_FOUND).json({
        status: httpStatuses_1.default.NOT_FOUND,
        error: { message: 'End point not found' }
    });
});
exports.default = routes;
