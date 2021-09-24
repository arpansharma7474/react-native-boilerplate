// import appleAuth, { AppleButton } from '@invertase/react-native-apple-authentication';
// import React from 'react'
// import {
//    View,
//    StyleSheet,
//    ViewStyle
// } from "react-native"
// import { moderateScale } from 'react-native-size-matters';
// import { Log } from '../lib/logger';
// import { getAppleLoginCreds, saveAppleLoginCreds } from '../../utils/storage';

// export type AppleRes = {
//    firstName?: string | null,
//    lastName?: string | null,
//    email?: string,
//    user: string,
//    nonce: string,
// }

// interface Props {
//    onAppleLoginSuccess: (appleRes: AppleRes) => void;
//    onAppleLoginFailure: (errorString: string) => void;
//    viewStyle?: ViewStyle;
// }

// const AppleSigninButtonComp = ({
//    onAppleLoginSuccess,
//    viewStyle,
//    onAppleLoginFailure }: Props) => {

//    const onAppleButtonPress = async () => {
//       const appleAuthRequestResponse = await appleAuth.performRequest({
//          requestedOperation: appleAuth.Operation.LOGIN,
//          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//       });
//       try {
//          // get current authentication state for user
//          const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
//          if (credentialState !== appleAuth.State.AUTHORIZED) {
//             return onAppleLoginFailure("Apple Signin not authorized. Please check and try again!!")
//          }
//          Log(credentialState, appleAuthRequestResponse, "Apple Sign in credential")
//          let appleRes: AppleRes | undefined = undefined;
//          if (appleAuthRequestResponse.email != null) {
//             appleRes = {
//                firstName: appleAuthRequestResponse.fullName?.givenName,
//                lastName: appleAuthRequestResponse.fullName?.familyName,
//                email: appleAuthRequestResponse.email,
//                user: appleAuthRequestResponse.user,
//                nonce: appleAuthRequestResponse.nonce,
//             }
//             // Apple only provides the credentials for the first time so we will save them to storage
//             await saveAppleLoginCreds(appleRes)
//          } else {
//             const storedCreds = await getAppleLoginCreds()
//             if (storedCreds != null && JSON.parse(storedCreds).user === appleAuthRequestResponse.user) {
//                appleRes = {
//                   ...JSON.parse(storedCreds),
//                   nonce: appleAuthRequestResponse.nonce
//                }
//             }
//             else
//                return onAppleLoginFailure(`Sorry!! We couldn't retrieve your Apple credentials, Please unlink the AppleID by going to "Settings > AppleID > Password and Security > Apps Using Apple ID > BottleZoo > Stop Using AppleID", then try again!`)
//          }
//          if (appleRes)
//             onAppleLoginSuccess(appleRes)
//          else
//             onAppleLoginFailure("An Error has occured in Apple Signin. Please try again!!")
//       } catch (error) {
//          Log(error, "error")
//          onAppleLoginFailure("An Error has occured in Apple Signin. Please try again!!")
//       }
//    }
//    return (
//       <View style={viewStyle}>
//          <AppleButton
//             buttonStyle={AppleButton.Style.WHITE}
//             buttonType={AppleButton.Type.SIGN_IN}
//             style={styles.appleBtn}
//             onPress={onAppleButtonPress}
//          />
//       </View>
//    )
// }

// export {
//    AppleSigninButtonComp
// }

// const styles = StyleSheet.create({
//    appleBtn: {
//       width: moderateScale(40),
//       height: moderateScale(40),
//       shadowColor: 'black',
//       shadowOpacity: 0.2,
//       shadowOffset: {
//          width: 0,
//          height: 2
//       },
//       shadowRadius: 2,
//    },
// })
