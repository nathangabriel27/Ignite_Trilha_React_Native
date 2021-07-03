import styled from "styled-components/native";
import theme from "../../../global/styles/theme";
import { TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'


export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    background-color: ${theme.colors.shape};
    flex-direction: row;
    width: 100%;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    padding: 18px 16px;
    margin-top: 16px;
   `;

export const Category = styled.Text`
    color: ${theme.colors.text};
    font-size: 14px;
    font-family: ${theme.fonts.regular};

`;
export const Icon = styled(Feather)`
    color:  ${theme.colors.text};
    font-size: 20px;
    font-family: ${theme.fonts.medium};
    margin-right: 12px;
`;
