import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { Feather } from '@expo/vector-icons'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFPercentage } from "react-native-responsive-fontsize";
import { DataListProps } from '.';
import { FlatList } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px ;
    background-color: ${theme.colors.primary};
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;
export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${getStatusBarHeight() + 28}px ;

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
export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 },
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(25)}px;

`;
export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
`;
export const Title = styled.Text`
    color: ${theme.colors.text_dark};
    font-size: 18px;
    font-family: ${theme.fonts.regular};
    margin-bottom: 16px;
`;

export const TransactionList = styled(
    FlatList as new () => FlatList<DataListProps>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: getBottomSpace() }
})`
   
`;