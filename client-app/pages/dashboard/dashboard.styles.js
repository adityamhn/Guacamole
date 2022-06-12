import styled from "styled-components";

import { WHITE_SECONDARY } from "../../constants";

export const DashboardContainer = styled.View`
  align-items: center;
`;

export const AddressText = styled.Text`
  font-size: 14px;
  color: ${WHITE_SECONDARY};
  margin-top: 6px;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(229, 229, 229, 0.15);
  padding: 16px 12px 12px;
  border-radius: 6px;
  align-items: center;
  margin: 0px 10px;
`;

export const ActionButtonText = styled.Text`
  font-size: 10px;
  color: ${WHITE_SECONDARY};
  margin-top: 6px;
`;
