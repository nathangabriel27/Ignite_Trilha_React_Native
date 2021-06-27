import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons'

interface TransactionProps {
    type: 'positive' | 'negative';
}

export const Container = styled.View`
    border-radius: 5px;
    padding: 17px 24px ;
    background-color: ${theme.colors.shape };
    margin-bottom: 16px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: 14px;
`;
export const Amount = styled.Text<TransactionProps>`
    font-family: ${theme.fonts.regular};
    font-size: 20px;
    margin-top: 2px;
    color: ${(props) => props.type === 'positive' ?theme.colors.success :theme.colors.attention };

`;
export const Footer = styled.View`
flex-direction:row;
justify-content: space-between;
align-items: center;
margin-top: 19px;
`;
export const Category = styled.View`
flex-direction:row;
align-items: center;
`;
export const Icon = styled(Feather) `
    font-size: 20px;
    color: ${theme.colors.text};  

`;
export const CategoryName = styled.Text`
    margin-left: 17px;
    font-size: 14px;
    color: ${theme.colors.text};  
`;
export const Date = styled.Text`
    font-size: 14px;
    color: ${theme.colors.text};  
`;

