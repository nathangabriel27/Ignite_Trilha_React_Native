import styled from "styled-components/native";
import theme from "../../../global/styles/theme";
import { TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TouchableOpacity)`
    width: 100%;
    background-color: ${theme.colors.secundary};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    padding: 18px;
   `;

export const Title = styled.Text`
    color: ${theme.colors.shape};
    font-size: 14px;
    font-family: ${theme.fonts.medium};
`;
