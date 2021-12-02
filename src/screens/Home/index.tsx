import React from 'react';

import {
  Container,
  Header,
  Image,
  InputSearch,
  IconSearchInput,
  Separator,
  Input,
  ContainerCards
} from './styles';

import SaoLuizPng from '../../assets/splash.png';
import { OffersCards } from '../../components/OffersCards';
import { InfoMercado } from '../../components/InfoMercado';

export function Home(){
  return (
    <Container>
      <Header>
        <Image source={SaoLuizPng} />
        <InputSearch>
          <IconSearchInput name='search' />
          <Separator />
          <Input placeholder='Pesquise o produto' placeholderTextColor='white' />
        </InputSearch>
      </Header>

      <ContainerCards>
        <OffersCards uri='https://www.picinin.com.br/imagens/5fbe960e967b6_arroz%20tipo.png' title='Arroz Picinin 5Kg' amount='19,99' />

        <OffersCards uri='https://media.cotabest.com.br/media/sku/cerveja-long-neck-330ml-heineken-un' title='Heiniken 330ml' amount='5,49' />

        <OffersCards uri='https://fortatacadista.vteximg.com.br/arquivos/ids/161263-1000-1000/QUEIJO-GORGONZOLA-VIGOR-100G-FRACION.---2556804.jpg?v=637437445582000000
        ' title='Gorgonzola 200g' amount='19,99' />

        <OffersCards uri='https://m.media-amazon.com/images/I/71WKgtFyThL._AC_SY879_.jpg' title='Óleo de Canola Liza' amount='14,99' />
      </ContainerCards>

      <InfoMercado />
    </Container>
  );
}