import styled, { css } from "styled-components/native";
import theme from "../../../global/styles/theme";
import { TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'

interface IconProps {
    type: 'up' | 'down'

}
interface ContainerProps {
    isActive: boolean,
    type: 'up' | 'down'
}

export const Container = styled(TouchableOpacity) <ContainerProps>`
    width: 48%;
   
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    padding: 16px;
    flex-direction: row;
    border-width: ${({ isActive }) => isActive ? 0 : 1.5}px ;
    border-style: solid;
    border-color: ${theme.colors.text};

    ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${theme.colors.success_light};
    ` }
    ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${theme.colors.attention_light};
    ` }
   `;

export const Icon = styled(Feather) <IconProps>`
    color:  ${(props) => props.type == 'up' ? theme.colors.success : theme.colors.attention};
    font-size: 24px;
    font-family: ${theme.fonts.medium};
    margin-right: 12px;
`;
export const Title = styled.Text`
    color: ${theme.colors.text_dark};
    font-size: 14px;
    font-family: ${theme.fonts.regular};
`;
