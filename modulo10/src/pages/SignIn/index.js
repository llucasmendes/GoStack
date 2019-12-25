import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Bacground from '~/components/Bacground';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SingLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Bacground>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => {}}>
          <SingLinkText>Criar Conta Gratuita</SingLinkText>
        </SignLink>
      </Container>
    </Bacground>
  );
}
