import React from "react";
import styled from "styled-components/native";
import { ViewStyle, StyleProp } from "react-native";
import Heading from "../../../atoms/Heading";
import Select from "../../../atoms/Select";
import IPropsSelect from "../../../atoms/Select/IPropsSelect";
import { marginXS } from "../../../../constrants/styles/spacing";

interface IPropsSelectForm extends IPropsSelect {
  style?: StyleProp<ViewStyle>;
  label: string;
}

const Wrapper = styled.View({});

const SelectForm: React.FC<IPropsSelectForm> = props => {
  const { style, label } = props;

  return (
    <Wrapper style={style}>
      <Heading style={{ marginBottom: marginXS }}>{label}</Heading>
      <Select {...props} style={{}} />
    </Wrapper>
  );
};

export default SelectForm;
