// import { Button, RadioButton } from 'react-native-paper';
import styled from "styled-components";
import {
  BACKGROUND_COLOR,
  BOLD_FONT,
  PRIMARY_FONT,
  SECONDARY_FONT,
} from "../../constants";

export const MainContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${BACKGROUND_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  color: #fff;
`;

export const TextSection = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 90%;
  margin-top: 30%;
`;
export const MainHeading = styled.Text`
  font-family: ${PRIMARY_FONT};
  color: white;
  font-size: 24px;
  text-align: left;
`;

export const MainTextInput = styled.TextInput`
  margin: 10px;
  border-radius: 16px;
  height: 50px;
  width: 90%;
  color: black;
  background: white;
  border-radius: 4px;
  font-size: 12px;
  background: #333333;
  padding-left: 16px;
  color: #fff;
  font-family: ${SECONDARY_FONT};
`;

export const ForgotPasswordContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
  color: #fff;
`;

export const ForgotPasswordText = styled.Text`
  color: black;
  font-family: ${SECONDARY_FONT};
  font-size: 17px;
  color: #fff;
`;

export const SignUpContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 12px;
  font-weight: 600;
`;
export const NewHereText = styled.Text`
  font-family: ${SECONDARY_FONT};
  color: black;
  font-size: 12px;
  color: #fff;
`;

export const SignUpText = styled.Text`
  font-family: ${SECONDARY_FONT};
  color: black;
  font-size: 12px;
  color: #faa307;
`;

export const SubHeading = styled.Text`
  font-family: ${SECONDARY_FONT};
  color: white;
  font-size: 18px;
  margin-top: 12px;
  color: #faa307;
`;

// export const StartedButton = styled(Button)`
//   color: #3577d0;
//   background-color: #1d1d1d;
//   border-radius: 50px;
//   height: 50px;
//   padding: 0 40px;
//   align-items: center;
//   justify-content: center;
//   margin-top: 30px;
// `;

// export const RadioSelect = styled(RadioButton.Item)``;
