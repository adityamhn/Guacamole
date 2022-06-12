import styled from "styled-components";
import { ORANGE, PRIMARY_FONT, WHITE, WHITE_SECONDARY } from "../../constants";

export const MenuLayoutContainer = styled.View`
height:100%;
`;

export const MenuHeader = styled.View`
margin-top:48px;
`;

export const RestName = styled.Text`
font-size:24px;
color:#fff;
font-weight:bold;
`;

export const TableNumber = styled.Text`
font-weight:500;
color:${ORANGE}`;


export const RestAddress = styled.Text`
color:${WHITE_SECONDARY};
font-size:15px;
`;

export const FoodTypesContainer = styled.View`
display:flex;
flex-direction:row;
align-items:center;
margin-top:32px;
overflow-x:auto;
`

export const FoodType = styled.Text`
background:rgba(229, 229, 229, 0.15);
padding: 6px 18px;
border-radius: 20px;
margin-right:8px;
color:${WHITE};
`


export const MainMenu = styled.View`

margin-top:24px;`;

export const ListName = styled.Text`
color:${WHITE_SECONDARY};
font-weight:500;
`;
export const List = styled.View`
margin-top:16px;`;

export const ListItem = styled.View`
display:flex;
flex-direction:row;
margin-bottom:32px;
`;
export const ListImage = styled.Image`
width:64px;
height:64px;
border-radius:4px;
`;
export const ItemDetails = styled.View`
margin-left:20px;
position:relative;
`;
export const ItemName = styled.Text`
color:${WHITE};

`;
export const ItemPrice = styled.Text`
color:${ORANGE};
font-size:16px;
font-weight:500;
`;
export const ItemDescription = styled.Text`
font-size:12px;
color:${WHITE_SECONDARY};
width:65%;`;


export const MenuFooter = styled.View``;

export const OrderContainer = styled.View`

`;
export const Order = styled.View`
align-items:center;
margin-top:120px;
`;
export const OrderTitle = styled.Text`
color:${ORANGE};
font-family:${PRIMARY_FONT};
font-size:32px;
`;


export const OrderSubTitle = styled.Text`
text-align:center;
margin-bottom:48px;
color:${WHITE_SECONDARY};
margin-top:12px;

`;


export const OrderItem = styled.View`
flex-direction:row;
align-items:center;
margin-bottom:14px;
`;



