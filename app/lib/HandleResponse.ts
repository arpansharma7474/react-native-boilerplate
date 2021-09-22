import store from '../store';
import { Log } from './Logger'
import Strings from '../utils/strings'

export const checkResponse = async (res: Response) => {
    const response = await res.clone().json()
    Log(`Response Status for ${res.url} code : ${res.status}`, res.clone().json())
    if (response.status && response.status.code && (response.status.code == 401 || response.status.code == 403)) {
        const payload = response.status.code == 401 ? Strings.error_auth : Strings.error_block
        //store.dispatch({ type: AUTH_ERROR, payload: payload });
    }
}