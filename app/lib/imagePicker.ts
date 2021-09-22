import { Platform, Linking } from 'react-native';
import ImagePicker, {
    ImageOrVideo,
    Options,
} from 'react-native-image-crop-picker';
import { showAlert } from '../lib/alertHelper';
import { Log } from '../lib/logger';
import { checkCameraPermission, checkGalleryPermission } from "../lib/permissions/permissionHelper"
import Strings from "../utils/strings"

export const selectImage = async (
    options: Options = {
        cropping: true,
    },
): Promise<ImageOrVideo> => {
    return new Promise<ImageOrVideo>(async (resolve, reject) => {
        try {
            const permRes = await checkGalleryPermission();
            if (permRes != 1) return;
            let res: ImageOrVideo = await ImagePicker.openPicker(options);
            if (res) resolve(res);
        } catch (error) {
            Log(error, "error selectImage")
            if (
                error.message === 'Required permission missing' &&
                Platform.OS === 'android'
            ) {
                const res = await showAlert(
                    Strings.str_permission_gallery,
                    'Alert',
                    true,
                    'Open Settings',
                );
                if (res) {
                    Linking.openSettings().catch(() => Log('Cannot open Settings'));
                }
            }
        }
    });
};

/**
 * Function to pick single image from camera
 */
export const captureImage = async (
    options: Options = {
        cropping: true,
    },
): Promise<ImageOrVideo> => {
    return new Promise<ImageOrVideo>(async (resolve, reject) => {
        try {
            const permRes = await checkCameraPermission();
            if (permRes != 1) return;
            let res: ImageOrVideo = await ImagePicker.openCamera({
                ...options,
                compressImageQuality: 0.6,
                maxWidth: 800,
                maxHeight: 800,
            });
            if (res) resolve(res);
        } catch (error) {
            Log(error, 'Error selectImage');
            if (
                error.message === 'Required permission missing' &&
                Platform.OS === 'android'
            ) {
                const res = await showAlert(
                    Strings.str_permission_camera,
                    'Alert',
                    true,
                    'Open Settings',
                );
                if (res) {
                    Linking.openSettings();
                }
            }
        }
    });
};



