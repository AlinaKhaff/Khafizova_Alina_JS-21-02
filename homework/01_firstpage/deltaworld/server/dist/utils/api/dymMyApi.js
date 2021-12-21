"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUpdateUser = exports.fetchCreateUser = exports.fetchCommentsByPost = exports.fetchPostsByUser = exports.fetchPost = exports.fetchPosts = exports.fetchUser = exports.fetchUsers = void 0;
const axios_1 = __importDefault(require("axios"));
const dumMyApi_1 = require("../../constants/api/dumMyApi");
const configServer_1 = require("../configServer");
const { dummyapi } = (0, configServer_1.getApiKeysConfigs)();
const fetchBase = (url, method, params, body) => {
    let config = {
        method,
        headers: {
            [dumMyApi_1.API_HEADS.APP_ID]: dummyapi
        }
    };
    if (params)
        config = Object.assign(Object.assign({}, config), { params });
    if (body)
        config = Object.assign(Object.assign({}, config), { data: body });
    return (0, axios_1.default)(url, config).then(data => data).catch(reason => reason.response);
};
const fetchUsers = (page, limit) => fetchBase(dumMyApi_1.BASE_URL + dumMyApi_1.ApiPoints.USER, 'GET', { page, limit });
exports.fetchUsers = fetchUsers;
const fetchUser = (id) => fetchBase(dumMyApi_1.BASE_URL + dumMyApi_1.ApiPoints.USER + `/${id}`, 'GET');
exports.fetchUser = fetchUser;
const fetchUpdateUser = (id, body) => fetchBase(dumMyApi_1.BASE_URL + dumMyApi_1.ApiPoints.USER + `/${id}`, 'PUT', undefined, body);
exports.fetchUpdateUser = fetchUpdateUser;
const fetchCreateUser = (body) => fetchBase(dumMyApi_1.BASE_URL + dumMyApi_1.ApiPoints.USER_CREATE, 'POST', undefined, body);
exports.fetchCreateUser = fetchCreateUser;
const fetchPosts = (page, limit) => fetchBase(dumMyApi_1.BASE_URL + dumMyApi_1.ApiPoints.POST, 'GET', { page, limit });
exports.fetchPosts = fetchPosts;
const fetchPost = (id) => fetchBase(dumMyApi_1.BASE_URL + dumMyApi_1.ApiPoints.POST + `/${id}`, 'GET');
exports.fetchPost = fetchPost;
const fetchPostsByUser = (id, page, limit) => fetchBase(dumMyApi_1.BASE_URL + dumMyApi_1.ApiPoints.USER + `/${id}` + dumMyApi_1.ApiPoints.POST, 'GET', { page, limit });
exports.fetchPostsByUser = fetchPostsByUser;
const fetchCommentsByPost = (id, page, limit) => fetchBase(dumMyApi_1.BASE_URL + dumMyApi_1.ApiPoints.POST + `/${id}` + dumMyApi_1.ApiPoints.COMMENT, 'GET', { page, limit });
exports.fetchCommentsByPost = fetchCommentsByPost;
