import styled from "styled-components";
import { BACKGROUND_COLOR, ORANGE_SECONDARY, PRIMARY_FONT, SECONDARY_FONT, WHITE, WHITE_SECONDARY } from "../../constants";
import { TextInput } from 'react-native-paper'


export const Container = styled.View`
flex: 1;
background-color: ${BACKGROUND_COLOR};
padding-left: 24px;
padding-right: 24px;
width: 100%;

`;


export const MainText = styled.Text`
color:${WHITE};
margin-top:36px;
font-size:30px;
font-family:${PRIMARY_FONT}
`

export const SecondaryText = styled.Text`
color:${ORANGE_SECONDARY};
font-size:26px;
margin-top:12px;

`

export const FormContainer = styled.View`
margin-top:72px;
`

export const Input = styled(TextInput)`
background-color:#333333;
color:${WHITE_SECONDARY};
margin-bottom:14px;
height:68px;
`

export const MoreText = styled.Text`
color:${WHITE_SECONDARY};
font-size:15px;
`