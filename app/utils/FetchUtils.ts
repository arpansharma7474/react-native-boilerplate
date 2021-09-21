import { checkResponse } from './HandleResponse';
import NetInfo from '@react-native-community/netinfo';
import Config from './Config';
import Error from './Error';
export const executePostRequest = async (
  endpoint: string,
  paramsObject: Object,
  token?: string,
  isUrlEncoded = false,
) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        code: 400,
        error: [{ error: Error.error.error_internet_connection }],
      };
    }
    let formBody = isUrlEncoded ? encodeParamsObject(paramsObject) : [];
    const res = await fetch(`${Config.server.base_url}/${endpoint}`, {
      method: 'POST',
      headers: getAPIHeader(token, isUrlEncoded),
      body: isUrlEncoded ? formBody : JSON.stringify(paramsObject),
    });
    checkResponse(res);
    if (res.status != 200) {
      return {
        code: res.status,
        error: res.text(),
      };
    }
    let response
    try {
      response = await res.json()
    }
    catch (error) {
      if (res.status == 200)
        return {
          code: res.status
        }
      else
        throw error
    }
    return {
      code: res.status,
      response,
    };
  } catch (error) {
    return {
      code: 400,
      error: error + '',
    };
  }
};
export const executeGetRequest = async (endpoint: string, token?: string) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        code: 400,
        error: [{ error: Error.error.error_internet_connection }],
      };
    }
    const res = await fetch(`${Config.server.base_url}/${endpoint}`, {
      method: 'GET',
      headers: getAPIHeader(token),
    });
    checkResponse(res);
    if (res.status != 200) {
      return {
        code: res.status,
        error: res.text(),
      };
    }
    const response = await res.json();
    return {
      code: res.status,
      response: response,
    };
  } catch (err) {
    return {
      code: 400,
      error: err + '',
    };
  }
};
export const executePutRequest = async (
  endpoint: string,
  token?: string,
) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        code: 400,
        error: [{ error: Error.error.error_internet_connection }],
      };
    }
    const res = await fetch(`${Config.server.base_url}/${endpoint}`, {
      method: 'PUT',
      headers: getAPIHeader(token),
    });
    checkResponse(res);
    if (res.status != 200) {
      return {
        code: res.status,
        error: res.text(),
      };
    }
    const response = await res.json();
    return {
      code: res.status,
      response: response,
    };
  } catch (err) {
    return {
      code: 400,
      error: err + '',
    };
  }
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