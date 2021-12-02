import React from 'react';

import {
  Container,
  BoxAdress,
  IconAdress,
  Adress,
  BoxContact,
  IconContact,
  Contact,
  BoxEmail,
  IconEmail,
  Email
} from './styles';

export function InfoMercado(){
  return (
    <Container>
      <BoxAdress>
        <IconAdress name='home' />
        <Adress>Rua Castro Alves, N° 1326 | Bady Bassitt - SP</Adress>
      </BoxAdress>

      <BoxContact>
        <IconContact name='phone' />
        <Contact>(17) xxxx-xxxx</Contact>
      </BoxContact>

      <BoxEmail>
        <IconEmail name='mail' />
        <Email>teste_teste@terra.com.br</Email>
      </BoxEmail>
    </Container>
  );
}