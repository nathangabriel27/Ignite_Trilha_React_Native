import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons'


export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: 42% ;
    background-color: ${theme.colors.primary};
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;
export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Photo = styled.Image`
    width: 48px;
    height: 48px ;
    border-radius: 10px;
`;
export const User = styled.View`
   margin-left: 17px ;
`;
export const UserGreeting = styled.Text`
   color: ${theme.colors.shape};
   font-size: 18px;
   font-family: ${theme.fonts.regular};
`;
export const UserName = styled.Text`
    color: ${theme.colors.shape};
    font-size: 18px;
    font-family: ${theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: ${theme.colors.secundary};
    font-size: 24px;

`;