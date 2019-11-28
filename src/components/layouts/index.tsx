import styled from "styled-components/native";
import { paddingM } from "../../constrants/styles/spacing";

const Page = styled.View({
  flex: 1,
  padding: paddingM
});

const SafeArea = styled.SafeAreaView({
  flex: 1
});

export { Page, SafeArea };
