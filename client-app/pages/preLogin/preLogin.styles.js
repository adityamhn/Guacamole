import { BACKGROUND_COLOR, PRIMARY_FONT } from "../../constants";
import styled from "styled-components";



export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: ${BACKGROUND_COLOR};
`;

export const OrangeText = styled.Text`
  color: #faa307;
`;

export const TitleText = styled.Text`
  color: #f9f9f9;
  font-size: 28px;
  text-align: center
  flex-wrap: wrap;
  width: 80%;
  font-family: ${PRIMARY_FONT};
`;