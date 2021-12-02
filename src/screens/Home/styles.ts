import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 20%;

  margin-top: ${getStatusBarHeight()};
  background-color: ${({ theme }) => theme.colors.background_light};

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const InputSearch = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.secondary};

  border-radius: 20px;

  margin: -20px 20px 0px;
  padding: 0 20px;

  height: 50px;
`;

export const IconSearchInput = styled(Feather)`
  color: ${({ theme }) => theme.colors.background_light};

  font-size: 20px;
`;

export const Separator = styled.View`
  width: 2px;
  height: 60%;

  margin-left: 10px;

  background-color: ${({ theme }) => theme.colors.background_light};
`;

export const Input = styled.TextInput`
  padding: 10px 10px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 15px;

  color: white;
`;

export const ContainerCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;

  margin-top: 50px;
`;