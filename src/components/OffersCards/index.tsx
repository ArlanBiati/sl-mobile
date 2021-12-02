import React from 'react';

interface Props {
  title: string
  amount: string
  uri: string
}


import {
  Container,
  ProductInfo,
  Photo,
  Infos,
  Title,
  Amount
} from './styles';

export function OffersCards({ uri, title, amount }: Props){
  return (
    <Container>
      <ProductInfo>
        <Photo source={{uri}} />
        <Infos>
          <Title>{title}</Title>
          <Amount>R$ {amount}</Amount>
        </Infos>
      </ProductInfo>
    </Container>
  );
}