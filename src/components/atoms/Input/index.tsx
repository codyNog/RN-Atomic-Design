import styled from "styled-components/native";
import {
  borderRadius,
  borderWidth,
  borderColor
} from "../../../constrants/styles/border";
import { fontM, fontL } from "../../../constrants/styles/fontSize";

const Input = styled.TextInput({
  borderWidth,
  borderRadius,
  borderColor,
  fontSize: fontM,
  height: 50
});

export default Input;
