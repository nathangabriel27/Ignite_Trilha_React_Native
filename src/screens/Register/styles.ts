import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";


export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.background};
`;
export const Header = styled.SafeAreaView`
    height: ${RFValue(113)}px;
    width: 100%;
    background-color: ${theme.colors.primary};
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 19px;
`;
export const Title = styled.Text`
    color: ${theme.colors.shape};
    font-size: 18px;
    font-family: ${theme.fonts.regular};
  `;
export const Form = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px;
    justify-content: space-between;

`;

export const Fields = styled.View``;
