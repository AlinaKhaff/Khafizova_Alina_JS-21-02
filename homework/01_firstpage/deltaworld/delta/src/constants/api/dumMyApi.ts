/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
interface IApiHeads {
  APP_ID: string;
  CONTENT_TYPE: string
}

const API_KEY: string = '6190af67ee71f7cb9f28a4f6 ';

const BASE_SERVER_URL: string = 'http://localhost:5000/api';
enum ApiPoints {
  USER = '/user',
  POST = '/post',
  COMMENT = '/comment',
  USER_CREATE = '/user/create'
}

const BASE_URL: string = 'https://dummyapi.io/data/v1';
const API_POINT_USER: string = '/user';
const API_POINT_USER_CREATE: string = '/user/create';
const API_POINT_POST: string = '/post';
const API_POINT_COMMENT: string = '/comment';

const METHODS_QUERY = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT'
};

const API_HEADS: IApiHeads = {
  APP_ID: 'app-id',
  CONTENT_TYPE: 'Content-Type'
};

enum ContentTypes {
  JSON = 'application/json;charset=utf-8',
}

export {
  BASE_URL, API_KEY, API_HEADS, API_POINT_USER, API_POINT_POST, METHODS_QUERY, API_POINT_USER_CREATE, ContentTypes,
  API_POINT_COMMENT, BASE_SERVER_URL, ApiPoints
};