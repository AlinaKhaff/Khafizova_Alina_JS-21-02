"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatuses;
(function (HttpStatuses) {
    HttpStatuses[HttpStatuses["OK"] = 200] = "OK";
    HttpStatuses[HttpStatuses["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatuses[HttpStatuses["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatuses[HttpStatuses["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(HttpStatuses || (HttpStatuses = {}));
exports.default = HttpStatuses;
