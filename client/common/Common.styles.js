import styled from "styled-components/native";
import { PRIMARY_FONT } from "../constants";

export const MainContainer = styled.ScrollView`
  width: 100%;
`;

export const VerticalCenter = styled.View`
  margin: auto;
`;

export const HeaderText = styled.Text`
  margin: 32px 16px;
  margin-bottom: 12px;
  color: #575757;
  font-family: ${PRIMARY_FONT};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0;
  text-align: center;
`;
