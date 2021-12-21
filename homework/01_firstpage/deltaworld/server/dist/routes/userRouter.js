"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const userRouter = (0, express_1.default)();
userRouter.get('/user', UserController_1.default.getUsers);
userRouter.get('/user/:id', UserController_1.default.getUser);
userRouter.get('/user/:id/login', UserController_1.default.loginUser);
userRouter.post('/user/create', UserController_1.default.createUser);
userRouter.put('/user/:id', UserController_1.default.updateUser); // !!!
exports.default = userRouter;
