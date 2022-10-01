/* eslint-disable curly */
import { checkResponse } from '../lib/checkResponse';
import NetInfo from '@react-native-community/netinfo';
import String from '../utils/strings';
import ApiConfig from '../config/api-config';
import HttpError from '../lib/HttpError';

const INTERNET_ERROR_CODE = 404;

// Fetch Utils class containing fetch and netInfo Boilerplate
// export const executePostRequest = async (
//   endpoint: string,
//   paramsObject?: Object,
//   token?: string,
//   isUrlEncoded = false,
// ) => {
//   const netInfo = await NetInfo.fetch();
//   if (!netInfo.isConnected)
//     throw new HttpError({
//       message: String.error_internet_connection,
//       statusCode: INTERNET_ERROR_CODE,
//     });
//   // create form body request for urlEncoded requested
//   const body = isUrlEncoded
//     ? encodeParamsObject(paramsObject)
//     : JSON.stringify(paramsObject);
//   const postResponse = await fetch(`${ApiConfig.BASE_URL}/${endpoint}`, {
//     method: 'POST',
//     headers: getAPIHeader(token, isUrlEncoded),
//     body,
//   });
//   checkResponse(postResponse);
//   if (!postResponse.ok) {
//     throw new HttpError({
//       statusCode: postResponse.status,
//       message: postResponse.statusText,
//     });
//   }
//   const jsonRes = await postResponse.json();
//   return jsonRes;
// };

// Get Request
export const executeGetRequest = async (endpoint: string) => {
  const netInfo = await NetInfo.fetch();
  if (!netInfo.isConnected)
    throw new HttpError({
      message: String.error_internet_connection,
      statusCode: INTERNET_ERROR_CODE,
    });
  const getResponse = await fetch(`${ApiConfig.BASE_URL}/${endpoint}`, {
    method: 'GET',
    headers: getAPIHeader(),
  });
  checkResponse(getResponse);
  if (!getResponse.ok) {
    const json = await getResponse.clone().json();
    throw new HttpError({
      statusCode: getResponse.status,
      message: json.message || getResponse.statusText,
    });
  }
  const res = await getResponse.json();
  return res;
};

// Put Request
// export const executePutRequest = async (endpoint: string, token?: string) => {
//   const netInfo = await NetInfo.fetch();
//   if (!netInfo.isConnected)
//     throw new HttpError({
//       message: String.error_internet_connection,
//       statusCode: INTERNET_ERROR_CODE,
//     });
//   const putResponse = await fetch(`${ApiConfig.BASE_URL}/${endpoint}`, {
//     method: 'PUT',
//     headers: getAPIHeader(token),
//   });
//   checkResponse(putResponse);
//   if (!putResponse.ok) {
//     throw new HttpError({
//       statusCode: putResponse.status,
//       message: putResponse.statusText,
//     });
//   }
//   const jsonRes = await putResponse.json();
//   return jsonRes;
// };

const getAPIHeader = () => {
  return {
    'X-RapidAPI-Key': ApiConfig.API_KEY,
    'X-RapidAPI-Host': ApiConfig.API_HOST,
  };
};

// const encodeParamsObject = (paramsObject: any) => {
//   let formBody = [];
//   for (let property in paramsObject) {
//     let encodedKey = encodeURIComponent(property);
//     let encodedValue = encodeURIComponent(paramsObject[property]);
//     formBody.push(encodedKey + '=' + encodedValue);
//   }
//   return formBody.join('&');
// };
