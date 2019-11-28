import React from "react";
import styled from "styled-components/native";
import { CSSObject } from "styled-components";
import IPropsButton from "./IPropsButton";
import { fontS, fontM } from "../../../constrants/styles/fontSize";

const buttonFactory = (
  wrap: CSSObject,
  label: CSSObject
): React.FC<IPropsButton> => props => {
  const { onPress, text, style } = props;

  const Wrap = styled.TouchableOpacity({
    ...{
      height: 50,
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center"
    },
    ...wrap
  });

  const Label = styled.Text({
    ...{
      fontSize: fontM,
      fontWeight: "bold"
    },
    ...label
  });

  return (
    <Wrap onPress={onPress} style={style}>
      <Label>{text}</Label>
    </Wrap>
  );
};

export default buttonFactory;
