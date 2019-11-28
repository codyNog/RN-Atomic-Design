import React from "react";
import styled from "styled-components/native";
import { ViewStyle, StyleProp, KeyboardTypeOptions } from "react-native";
import Heading from "../../atoms/Heading";
import Input from "../../atoms/Input";
import { marginXS } from "../../../constrants/styles/spacing";

interface IPropsInputForm {
  style?: StyleProp<ViewStyle>;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

interface IInputRole {
  autoCompleteType:
    | "name"
    | "username"
    | "password"
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-number"
    | "email"
    | "postal-code"
    | "street-address"
    | "tel"
    | "off";
  keyboardType: KeyboardTypeOptions;
}

const Wrapper = styled.View({});

const FormLayout = (role: IInputRole): React.FC<IPropsInputForm> => props => {
  const { style, label, value, onChangeText } = props;
  const { autoCompleteType, keyboardType } = role;

  return (
    <Wrapper style={style}>
      <Heading style={{ marginBottom: marginXS }}>{label}</Heading>
      <Input
        {...props}
        style={{}}
        autoCompleteType={autoCompleteType}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </Wrapper>
  );
};

export default FormLayout;
