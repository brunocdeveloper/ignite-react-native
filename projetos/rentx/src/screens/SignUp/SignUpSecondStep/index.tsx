import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useTheme } from "styled-components/native";
import BackButton from "../../../components/BackButton";
import Bullet from "../../../components/Bullet";
import Button from "../../../components/Button";
import PasswordInput from "../../../components/PasswordInput";
import { NavigationProps } from "../../../routes/app.stack.routes";
import api from "../../../services/api";

import {
  Container,
  Form,
  FormTitle,
  Header,
  Steps,
  SubTitle,
  Title,
} from "./styles";

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

const SignUpSecondStep = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigation = useNavigation<NavigationProps>();
  const route = useRoute();
  const theme = useTheme();

  const { user } = route.params as Params;

  const handleBack = () => {
    navigation.goBack();
  };

  const handleRegister = async () => {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe a senha e a confirmação");
    }

    if (password !== passwordConfirm) {
      return Alert.alert("As senhas não são iguais");
    }

    await api
      .post("/users", {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password,
      })
      .then(() => {
        navigation.navigate("Confirmation", {
          nextScreenRoute: "SignIn",
          title: "Conta criada!",
          message: `Agora é só fazer login\ne aproveitar`,
        });
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Opa", "Não foi possível cadastrar");
      });
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet />
              <Bullet />
            </Steps>
          </Header>
          <Title>Crie sua {"\n"} conta</Title>
          <SubTitle>
            Faça seu cadastro de {"\n"}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>

          <Button
            color={theme.colors.success}
            title="Cadastrar"
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpSecondStep;
