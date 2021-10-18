import { checkResponse } from '../lib/checkResponse';
import NetInfo from '@react-native-community/netinfo';
import String from '../utils/strings';
import ApiConfig from '../config/api-config';
import HttpError from '../lib/HttpError';

const INTERNET_ERROR_CODE = 404

// Fetch Utils class containing fetch and netInfo Boilerplate
export const executePostRequest = async (
  endpoint: string,
  paramsObject?: Object,
  token?: string,
  isUrlEncoded = false,
) => {
  const netInfo = await NetInfo.fetch();
  if (!netInfo.isConnected)
    throw new HttpError({ message: String.error_internet_connection, statusCode: INTERNET_ERROR_CODE })
  // create form body request for urlEncoded requested
  const body = isUrlEncoded ? encodeParamsObject(paramsObject) : JSON.stringify(paramsObject);
  const postResponse = await fetch(`${ApiConfig.BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: getAPIHeader(token, isUrlEncoded),
    body
  });
  checkResponse(postResponse);
  if (!postResponse.ok) {
    throw new HttpError({
      statusCode: postResponse.status,
      message: postResponse.statusText
    })
  }
  const jsonRes = await postResponse.json()
  return jsonRes
};

// Get Request
export const executeGetRequest = async (
  endpoint: string,
  token?: string
) => {
  const netInfo = await NetInfo.fetch();
  if (!netInfo.isConnected)
    throw new HttpError({ message: String.error_internet_connection, statusCode: INTERNET_ERROR_CODE })
  const getResponse = await fetch(`${ApiConfig.BASE_URL}/${endpoint}`, {
    method: 'GET',
    headers: getAPIHeader(token),
  });
  checkResponse(getResponse);
  if (!getResponse.ok) {
    throw new HttpError({
      statusCode: getResponse.status,
      message: getResponse.statusText
    })
  }
  const jsonRes = await getResponse.json()
  return jsonRes
};

// Put Request
export const executePutRequest = async (
  endpoint: string,
  token?: string,
) => {
  const netInfo = await NetInfo.fetch();
  if (!netInfo.isConnected)
    throw new HttpError({ message: String.error_internet_connection, statusCode: INTERNET_ERROR_CODE })
  const putResponse = await fetch(`${ApiConfig.BASE_URL}/${endpoint}`, {
    method: 'PUT',
    headers: getAPIHeader(token),
  });
  checkResponse(putResponse);
  if (!putResponse.ok) {
    throw new HttpError({
      statusCode: putResponse.status,
      message: putResponse.statusText
    })
  }
  const jsonRes = await putResponse.json()
  return jsonRes
};

const getAPIHeader = (token?: string, isUrlEncoded?: boolean) => {
  return {
    "Access-Control-Allow-Origin": "*",
    Accept: 'application/json',
    'Content-Type': isUrlEncoded
      ? 'application/x-www-form-urlencoded'
      : 'application/json',
    authorization: token ? 'Bearer ' + token : '',
    'X-app-name': 'frontend',
  };
};

const encodeParamsObject = (paramsObject: any) => {
  let formBody = [];
  for (var property in paramsObject) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(paramsObject[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
};