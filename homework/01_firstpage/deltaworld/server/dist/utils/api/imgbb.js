"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUploadImage = void 0;
const configServer_1 = require("../configServer");
const form_data_1 = __importDefault(require("form-data"));
const axios_1 = __importDefault(require("axios"));
const imgbb_1 = require("../../constants/api/imgbb");
const { imgbb } = (0, configServer_1.getApiKeysConfigs)();
const fetchBase = (url, image) => {
    const formData = new form_data_1.default();
    formData.append('key', imgbb);
    formData.append('image', image.replace(/^.*,/, ''));
    let config = {
        method: 'POST',
        headers: formData.getHeaders(),
        data: formData
    };
    return (0, axios_1.default)(url, config).then(data => data).catch(reason => reason.response);
};
const fetchUploadImage = (image) => fetchBase(imgbb_1.BASE_URL + imgbb_1.API_POINT_IMG_UPLOAD, image);
exports.fetchUploadImage = fetchUploadImage;
