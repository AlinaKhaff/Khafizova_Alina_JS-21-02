interface IFieldsHeadApi {
    [key: string]: string;
  }
  
  const BASE_URL: string = 'https://dummyapi.io/data/v1/';
  const USER_POINT_URL: string = `${BASE_URL}user`;
  
  const API_KEY: string = '6190af67ee71f7cb9f28a4f6';
  
  const FIELDS_HEAD_API: IFieldsHeadApi = {
    API_KEY: 'app-id'
  };
  
  export {
    BASE_URL, USER_POINT_URL, API_KEY, FIELDS_HEAD_API
  };