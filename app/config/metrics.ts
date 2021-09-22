import { Dimensions, NativeModules } from "react-native";

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

// Status bar height
export const getStatuBarHeight = () => {
  const { StatusBarManager } = NativeModules;
  return StatusBarManager.HEIGHT
}

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









