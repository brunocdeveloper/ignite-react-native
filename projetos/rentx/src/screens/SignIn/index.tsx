import React from "react";
import { KeyboardAvoidingView, StatusBar, View } from "react-native";
import { useTheme } from "styled-components/native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import PasswordInput from "../../components/PasswordInput";
import { Container, Header, Title, SubTitle, Footer, Form } from "./styles";

const SignIn = () => {
  const theme = useTheme();
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <Container>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>
          <Title>Estamos{"\n"}quase lá.</Title>
          <SubTitle>
            Faça seu login para começar{"\n"}uma experiência incrível.
          </SubTitle>
        </Header>

        <Form>
          <Input
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <PasswordInput iconName="lock" placeholder="Senha" />
        </Form>

        <Footer>
          <View style={{ marginBottom: 8 }}>
            <Button title="Login" onPress={() => {}} />
          </View>
          <Button
            light={true}
            title="Criar conta gratuita"
            color={theme.colors.background_secondary}
            onPress={() => {}}
          />
        </Footer>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
