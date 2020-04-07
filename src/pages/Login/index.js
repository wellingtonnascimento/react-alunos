import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      console.log(response);
    }

    getData();
  }, []);

  return (
    <Container>
      <Title>
        Lorem!
        <small>Oi </small>
      </Title>
      <Paragrafo>djasdhd jaodj oaid jad</Paragrafo>
      <button type="button">Enviar </button>
    </Container>
  );
}
