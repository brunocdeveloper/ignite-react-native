import React, { useState } from "react";
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
import { CategorySelect } from "../../components/Forms/CategorySelect/Index";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  const handleTransacitonsTypesSelect = (type: string) => {
    setTransactionType(type);
  };

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
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransacitonsTypesSelect("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransacitonsTypesSelect("down")}
              isActive={transactionType === "down"}
            />
          </TransacitonsTypes>
          <CategorySelect title="Categoria"></CategorySelect>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
