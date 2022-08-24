import React, { useState } from "react";
import { Modal } from "react-native";

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
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton/Index";
import { CategorySelect } from "../CategorySelect";
import { useForm } from "react-hook-form";
import InputForm from "../../components/Forms/InputForm";

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const { control, handleSubmit } = useForm();
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const handleTransacitonsTypesSelect = (type: string) => {
    setTransactionType(type);
  };

  const handleOpenCloseSelectCategoryModal = () => {
    setCategoryModalOpen(true);
  };

  const handleCloseSelectCategoryModal = () => {
    setCategoryModalOpen(false);
  };

  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm control={control} name="name" placeholder="nome" />
          <InputForm control={control} placeholder="preço" name="amount" />

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
          <CategorySelectButton
            title={category.name}
            onPress={handleOpenCloseSelectCategoryModal}
          />
        </Fields>

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
