import React from "react";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransacitonsTypes,
} from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="nome" />
          <Input placeholder="preço" />

          <TransacitonsTypes>
            <TransactionTypeButton type="up" title="Income" />
            <TransactionTypeButton type="down" title="Outcome" />
          </TransacitonsTypes>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
