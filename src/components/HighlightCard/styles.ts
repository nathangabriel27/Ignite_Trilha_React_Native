import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons'



export const Container = styled.View`
    width: 300px;
    border-radius: 5px;
    padding: 19px 23px ;
    padding-bottom: 42px;
    background-color: ${theme.colors.shape};
    margin-right: 16px;
    height: 300px;
`;
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const Title = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: 14px;
    color: ${theme.colors.text_dark};
`;
export const Icon = styled(Feather)`
    color: ${theme.colors.secundary};
    font-size: 40px;

`;
export const Footer = styled.View`

`;
export const Amount = styled.Text`
    font-family: ${theme.fonts.medium};
    font-size: 32px;
    color: ${theme.colors.text_dark};
    margin-top: 38px;
`;
export const LastTransaction = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: 12px;
    color: ${theme.colors.text};
`;
