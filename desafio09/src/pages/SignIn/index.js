import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import logo from '../../assets/gympoint.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email valido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string().required('A Senha é obrigatoria'),
});

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="gympoint" />

      <Form schema={schema}>
        <Input
          label="seu e-mail"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
        />

        <Input
          label="sua senha"
          name="password"
          type="password"
          placeholder="sua senha"
        />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
