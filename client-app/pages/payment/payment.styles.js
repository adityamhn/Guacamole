import { Divider } from "react-native-paper"
import styled from "styled-components"
import { ORANGE, WHITE_SECONDARY } from "../../constants"


export const SectionTitle = styled.Text`
font-size:16px;
color:${WHITE_SECONDARY};
font-weight:bold;
margin-top:24px;
margin-bottom:12px;
`

export const OrangeDivider = styled(Divider)`
background-color: ${ORANGE};
opacity:0.5;
margin:16px 0px;

`