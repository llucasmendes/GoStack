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

export default function SignUp({ navigation }) {
  const emaildRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Bacground>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emaildRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emaildRef}
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
          <SubmitButton onPress={handleSubmit}>Cadastrar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SingLinkText>Já tenho conta</SingLinkText>
        </SignLink>
      </Container>
    </Bacground>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.func.isRequired,
};
