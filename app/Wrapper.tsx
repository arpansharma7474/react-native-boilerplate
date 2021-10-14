import React, { ReactNode } from 'react'
import { SafeAreaView, StyleSheet, ViewStyle, StatusBar, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type Props = {
    enableScroll?: boolean,
    children: ReactNode,
    style?: ViewStyle,
    hasTextInput?: boolean
    loadingColor?: boolean
}

/** A Wrapper Component with BoilerPlate code for all Screens */
export function Wrapper(props: Props) {
    const {
        children,
        enableScroll,
        style,
        hasTextInput,
        loadingColor
    } = props

    const containerStyle: ViewStyle = {
        ...styles.wrapper_style,
        ...style
    }

    return (
        <SafeAreaView
            style={containerStyle}>
            <StatusBar
                barStyle={'light-content'}
                translucent={false}
                backgroundColor={"black"} />
            {hasTextInput ?
                <KeyboardAwareScrollView
                    contentContainerStyle={{
                        ...styles.wrapper_style,
                        ...style
                    }}
                    enableAutomaticScroll={Platform.OS === "ios"}
                    keyboardShouldPersistTaps={'always'}
                    showsVerticalScrollIndicator={false}
                    enableOnAndroid>
                    {children}
                </KeyboardAwareScrollView> :
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={enableScroll}
                    keyboardShouldPersistTaps='handled'
                    contentContainerStyle={containerStyle}>
                    {children}
                </ScrollView>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper_style: {
        flexGrow: 1,
        backgroundColor: 'black'
    }
})

