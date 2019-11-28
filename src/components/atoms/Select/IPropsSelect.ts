import { StyleProp, ViewStyle } from "react-native";
import { Item } from "react-native-picker-select";

interface IPropsSelect {
  value: string;
  placeholder: object;
  style?: StyleProp<ViewStyle>;
  items: Array<Item>;
  onValueChange: (value: any, index: number) => void;
}

export default IPropsSelect;
