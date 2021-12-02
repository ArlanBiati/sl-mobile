import styled from "styled-components/native";


export const Container = styled.View`
  height: 150px;
  width: 300px;

  border-radius: 20px;

  padding: 19px 23px;

  margin-right: 16px;

  background-color: ${({ theme }) => theme.colors.background_light};
`;

export const ProductInfo = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;

export const Photo = styled.Image`
  width: 35%;
  height: 100px;
`;

export const Infos = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.primary};
`;

export const Amount = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.secondary};
`;
