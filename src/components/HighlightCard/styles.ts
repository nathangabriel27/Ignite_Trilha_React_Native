import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons'

interface TypeProps {
    type: 'up' | 'down' | 'total'

}

export const Container = styled.View<TypeProps>`
    width: 300px;
    border-radius: 5px;
    padding: 19px 23px ;
    padding-bottom: 42px;
    margin-right: 16px;
    height: 200px;
    background-color: ${(props) => props.type === 'total' ?theme.colors.secundary :theme.colors.shape }
`;
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const Title = styled.Text<TypeProps>`
    font-family: ${theme.fonts.regular};
    font-size: 14px;
    color: ${(props) => props.type === 'total' ?theme.colors.shape :theme.colors.text_dark };

`;
export const Icon = styled(Feather) <TypeProps>`
    font-size: 40px;
    ${({ type }) => type === 'up' && css`
        color: ${theme.colors.success};    
    `};
    ${({ type }) => type === 'down' && css`
        color: ${theme.colors.attention};    
    `};
    ${({ type }) => type === 'total' && css`
        color: ${theme.colors.shape};    
    `};

`;
export const Footer = styled.View`

`;
export const Amount = styled.Text<TypeProps>`
    font-family: ${theme.fonts.medium};
    font-size: 32px;
    color: ${(props) => props.type === 'total' ?theme.colors.shape :theme.colors.text_dark };
    margin-top: 38px;
`;
export const LastTransaction = styled.Text<TypeProps>`
    font-family: ${theme.fonts.regular};
    font-size: 12px;
    color: ${(props) => props.type === 'total' ?theme.colors.shape :theme.colors.text };

`;
