import Security from './Security'
import { PERMISSIONS } from 'react-native-permissions';

export default {
    server: {
        base_url: Security.live_url,

    },

    static_pages_url: {
    },

    permission_messages: {
        permission_camera:
            'Camera permission is required to select images. Please allow this permission in the app settings!!',
        permission_gallery:
            'Gallery permission is required to select images. Please allow this permission in the app settings!!',
        permission_location:
            'Location permission is required to see users close to your location. Please allow this permission in the app settings!!',

        //Permissions ANDROID
        ANDROID_CAMERA: PERMISSIONS.ANDROID.CAMERA,
        ANDROID_READ_EXTERNAL_STORAGE: 'photo',

        //Permissions IOS
        IOS_CAMERA_PERMISSION: PERMISSIONS.IOS.CAMERA,
        IOS_PHOTO_LIBRARY: PERMISSIONS.IOS.PHOTO_LIBRARY,
        IOS_MEDIA_LIBRARY: PERMISSIONS.IOS.MEDIA_LIBRARY,
    },

    type: {

    },

    icons: {

    },

    constants: {

    },

    fonts: {

    }
}



