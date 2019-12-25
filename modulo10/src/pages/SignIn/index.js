import React from 'react';
import { Text } from 'react-native';

import Bacground from '~/components/Bacground';
import Button from '~/components/Button';
import Input from '~/components/Input';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Bacground>
      <Text>Sign In</Text>

      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />
      <Button>Entrar</Button>
    </Bacground>
  );
}
