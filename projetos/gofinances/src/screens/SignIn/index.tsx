import React, { useContext, useState } from "react";
import { ActivityIndicator, Alert, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { AuthContext } from "../../AuthContext";
import SignInSocialButton from "../../components/SignInSocialButton";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

export const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, singInWithApple } = useAuth();

  const theme = useTheme();

  async function handleSingInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      Alert.alert("Não foi possivel conectar a conta Google");
      setIsLoading(false);
    }
  }

  async function handleSingInWithApple() {
    try {
      return await singInWithApple();
    } catch (error) {
      Alert.alert("Não foi possivel conectar a conta Apple");
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {" \n"}finanças de forma {" \n"}muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>Faça seu login com uma das contas abaixo</SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSingInWithGoogle}
          />
          {Platform.OS === "ios" && (
            <SignInSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSingInWithApple}
            />
          )}
        </FooterWrapper>

        {isLoading && (
          <ActivityIndicator color={theme.colors.shape} size="large" />
        )}
      </Footer>
    </Container>
  );
};

export default SignIn;
