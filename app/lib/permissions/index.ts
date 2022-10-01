import {
  check,
  RESULTS,
  request,
  Permission,
  PERMISSIONS,
} from 'react-native-permissions';
import { Linking, Platform } from 'react-native';
import { showAlert } from '../alertHelper';
import Permissions from './types';
import Strings from '../../utils/strings';

/**
 *
 * @param permission Permission name
 * @param text Text to be shown whilw asking for the permission
 * @returns Promise with permission status
 */
export const checkPermission = (
  permission: Permission,
  text: string,
): Promise<number> => {
  return new Promise(async (resolve, _) => {
    const result = await check(permission);
    switch (result) {
      case RESULTS.UNAVAILABLE:
        openSettings(text);
        break;
      case RESULTS.DENIED:
        const permissionRes = await request(permission);
        if (permissionRes == 'granted') {
          resolve(1);
        }
        break;
      case RESULTS.GRANTED:
      case RESULTS.LIMITED:
        resolve(1);
        break;
      case RESULTS.BLOCKED:
        openSettings(text);
        break;
    }
  });
};

export const openSettings = async (text: string) => {
  const alertRes = await showAlert(text, 'Alert', true, 'Open Settings');
  alertRes && Linking.openSettings();
};

export async function checkCameraPermission(): Promise<number> {
  let permission: Permission = Permissions.ANDROID_CAMERA;
  if (Platform.OS === 'ios') {
    permission = Permissions.IOS_CAMERA_PERMISSION;
  }
  return await checkPermission(permission, Strings.str_permission_camera);
}

export async function checkGalleryPermission(): Promise<number> {
  let permission: Permission = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
  if (Platform.OS === 'ios') {
    permission = PERMISSIONS.IOS.PHOTO_LIBRARY;
  }
  return await checkPermission(permission, Strings.str_permission_gallery);
}
