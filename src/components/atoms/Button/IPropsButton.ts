import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

interface IPropsButton {
  onPress: (event: GestureResponderEvent) => void;
  text: number | string;
  style?: StyleProp<ViewStyle>;
}

export default IPropsButton;
