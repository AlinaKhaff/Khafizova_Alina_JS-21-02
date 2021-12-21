"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOptions = exports.PageOptions = exports.ApiPoints = exports.API_HEADS = exports.BASE_URL = void 0;
const BASE_URL = 'https://dummyapi.io/data/v1';
exports.BASE_URL = BASE_URL;
var ApiPoints;
(function (ApiPoints) {
    ApiPoints["USER"] = "/user";
    ApiPoints["POST"] = "/post";
    ApiPoints["COMMENT"] = "/comment";
    ApiPoints["USER_CREATE"] = "/user/create";
})(ApiPoints || (ApiPoints = {}));
exports.ApiPoints = ApiPoints;
var PageOptions;
(function (PageOptions) {
    PageOptions[PageOptions["MIN"] = 0] = "MIN";
})(PageOptions || (PageOptions = {}));
exports.PageOptions = PageOptions;
var LimitOptions;
(function (LimitOptions) {
    LimitOptions[LimitOptions["MAX"] = 20] = "MAX";
    LimitOptions[LimitOptions["MIN"] = 5] = "MIN";
})(LimitOptions || (LimitOptions = {}));
exports.LimitOptions = LimitOptions;
const API_HEADS = {
    APP_ID: 'app-id',
    CONTENT_TYPE: 'Content-Type'
};
exports.API_HEADS = API_HEADS;
