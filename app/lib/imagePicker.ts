import { Platform, Linking } from 'react-native';
import ImagePicker, {
    ImageOrVideo,
    Options,
} from 'react-native-image-crop-picker';
import { moderateScale } from 'react-native-size-matters';
import AppStyles from '../config/styles';
import { showAlert } from '../lib/alertHelper';
import { Log } from '../lib/logger';
import {
    checkCameraPermission,
    checkGalleryPermission
} from "../lib/permissions/permissionHelper"
import Strings from "../utils/strings"

const DEFAULT_OPTIONS: Options = {
    cropping: true,
    freeStyleCropEnabled: true,
    cropperToolbarColor: AppStyles.color.COLOR_THEME,
    cropperToolbarWidgetColor: 'white',
    cropperStatusBarColor: AppStyles.color.COLOR_THEME,
    width: moderateScale(500),
    height: moderateScale(500),
    mediaType: "photo"
}

export const selectImage = async (options?: Options): Promise<ImageOrVideo> => {
    return new Promise<ImageOrVideo>(async (resolve, reject) => {
        try {
            const permRes = await checkGalleryPermission();
            if (permRes != 1) return;
            let response: ImageOrVideo = await ImagePicker.openPicker({
                ...DEFAULT_OPTIONS,
                ...options
            });
            if (response) resolve(response);
        } catch (error: any) {
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
export const captureImage = async (options?: Options): Promise<ImageOrVideo> => {
    return new Promise<ImageOrVideo>(async (resolve, reject) => {
        try {
            const permRes = await checkCameraPermission();
            if (permRes != 1) return;
            let res: ImageOrVideo = await ImagePicker.openCamera({
                ...DEFAULT_OPTIONS,
                ...options
            });
            if (res) resolve(res);
        } catch (error: any) {
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



