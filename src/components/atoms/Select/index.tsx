import React from "react";
import RNPickerSelect from "react-native-picker-select";
import {
  borderWidth,
  borderRadius,
  borderColor
} from "../../../constrants/styles/border";
import styled from "styled-components/native";
import { fontM } from "../../../constrants/styles/fontSize";
import IPropsSelect from "./IPropsSelect";

const Select: React.FC<IPropsSelect> = props => {
  const { style } = props;

  const Wrapper = styled.View({
    borderWidth,
    borderRadius,
    borderColor,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  });

  return (
    <Wrapper style={style}>
      <RNPickerSelect
        {...props}
        style={{
          inputIOS: {
            color: "black",
            fontSize: fontM
          },
          placeholder: {
            color: "grey",
            fontSize: fontM
          }
        }}
      />
    </Wrapper>
  );
};

export default Select;
