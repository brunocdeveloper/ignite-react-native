import React, { useState } from "react";
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from "react-native";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

const schema = Yup.object().shape({
  name: Yup.string().required("Nomé é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um valor númerico")
    .positive("O valor não pode ser negativo")
    .required("O valor é obrigatório"),
});

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
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

  function handleRegister(form: any) {
    if (!transactionType) {
      return Alert.alert("Selecione o tipo da transação");
    }

    if (category.key === "category") {
      return Alert.alert("Selecione a categoria");
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              control={control}
              name="name"
              placeholder="nome"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              control={control}
              placeholder="preço"
              name="amount"
              autoCorrect={false}
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />

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
    </TouchableWithoutFeedback>
  );
}
