import { Platform, StyleSheet } from 'react-native'
import AppStyles from '../config/styles'

export const commonStyles = StyleSheet.create({
   shadowPrimary: {
      ...Platform.select({
         ios: {
            shadowColor: AppStyles.color.GREY,
            shadowOffset: {
               width: 0,
               height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
         },
         android: {
            elevation: 4,
            borderBottomWidth: 0.2,
            borderTopWidth: 0.2,
            borderColor: AppStyles.color.GREY,
         },
      }),
   }
})