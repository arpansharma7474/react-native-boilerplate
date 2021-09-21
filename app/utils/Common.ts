import { Dimensions, Platform, Linking } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Config from './Config';
import ImagePicker, {
  ImageOrVideo,
  Options,
} from 'react-native-image-crop-picker';
import { showAlert } from './AlertHelper';
import { Log } from './Logger';
import { checkCameraPermission } from './PermissionHelper';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const selectImage = async (
  options: Options = {
    cropping: true,
  },
): Promise<ImageOrVideo> => {
  return new Promise<ImageOrVideo>(async (resolve, reject) => {
    try {
      const permRes = await checkCameraPermission();
      if (permRes != 1) return;
      let res: ImageOrVideo = await ImagePicker.openPicker(options);
      if (res) resolve(res);
    } catch (error) {
      if (
        error.message === 'Required permission missing' &&
        Platform.OS === 'android'
      ) {
        const res = await showAlert(
          Config.permission_messages.permission_gallery,
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
      let res: ImageOrVideo = await ImagePicker.openCamera(options);
      if (res) resolve(res);
    } catch (error) {
      Log(error, 'Permission Error');
      if (
        error.message === 'Required permission missing' &&
        Platform.OS === 'android'
      ) {
        const res = await showAlert(
          Config.permission_messages.permission_camera,
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

/**common function for shadow in android and ios */
export const elevationShadowStyle = (elevation: number) => {
  return {
    elevation,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.4,
    shadowRadius: 0.8 * elevation,
  };
};

export const hasNotch = () => {
  return DeviceInfo.hasNotch();
};


