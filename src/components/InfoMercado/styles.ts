import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 300px;

  margin-bottom: 10px;
  padding: 25px 0;

  background-color: ${({ theme }) => theme.colors.background_light};

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const BoxAdress = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconAdress = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 25px;
  margin-right: 10px;
`;

export const Adress = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const BoxContact = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContact = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 25px;
  margin-right: 10px;
`;

export const Contact = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const BoxEmail = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconEmail = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 25px;
  margin-right: 10px;
`;

export const Email = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
