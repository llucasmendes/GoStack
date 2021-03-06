import React, { useRef } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
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

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() {}

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
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SingLinkText>Criar Conta Gratuita</SingLinkText>
        </SignLink>
      </Container>
    </Bacground>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.func.isRequired,
};
