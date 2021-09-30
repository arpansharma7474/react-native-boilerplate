import { AccessToken, LoginManager } from 'react-native-fbsdk';

// Calling the following function will open the FB login dialogue:
export const facebookLogin = async () => {
    try {
        LoginManager.logOut();
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled)
            throw new Error('User cancelled request');

        const data = await AccessToken.getCurrentAccessToken();
        if (!data)
            throw new Error('Something went wrong obtaining the users access token');

        // const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
        // login with credential
        // const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
        // const userData = firebaseUserCredential.user.toJSON().providerData[0]



    } catch (e) {
        console.error(e);
    }

}