import { check, RESULTS, request } from 'react-native-permissions';
import { Linking } from 'react-native';
import { showAlert } from './AlertHelper';
import String from './String'
import { PERMISSIONS } from 'react-native-permissions'

export const checkPermission = (permission, alertMessage): Promise<number> => {
    return new Promise(async (resolve, reject) => {
        const result = await check(permission);
        console.log(result, "Permission Result")
        switch (result) {
            case RESULTS.UNAVAILABLE:
                const alertRes = await showAlert(
                    alertMessage,
                    String.strings.alert,
                    true,
                    String.strings.open_settings,
                );
                if (alertRes) Linking.openSettings();
                break;

            case RESULTS.DENIED:
                const permRes = await request(permission)
                if (permRes == "granted")
                    resolve(1)
                break;

            case RESULTS.GRANTED:
                resolve(1);
                break;
            case RESULTS.BLOCKED:
                const res = await showAlert(
                    alertMessage,
                    String.strings.alert,
                    true,
                    String.strings.open_settings,
                );
                if (res) Linking.openSettings();
                break;
        }
    });
};


