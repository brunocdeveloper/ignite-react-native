import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import BackButton from "../../components/BackButton";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogoutButton,
  PhotoContainer,
  Photo,
  PhotoButton,
  Content,
  Options,
  Option,
  OptionTitle,
  Section,
} from "./styles";
import Input from "../../components/Input";
import { KeyboardAvoidingView } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import PasswordInput from "../../components/PasswordInput";
import { useAuth } from "../../hooks/auth";

enum OptionType {
  "DATA_EDIT" = "dataEdit",
  "PASSWDORD_EDIT" = "passwordEdit",
}

const Profile = () => {
  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");
  const { user } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignOut = () => {};

  const handleOptionChange = (option: "dataEdit" | "passwordEdit") => () => {
    setOption(option);
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <Container>
        <Header>
          <HeaderTop>
            <BackButton color={theme.colors.shape} onPress={handleBack} />
            <HeaderTitle>Editar Perfil</HeaderTitle>
            <LogoutButton onPress={handleSignOut}>
              <Feather name="power" size={24} color={theme.colors.shape} />
            </LogoutButton>
          </HeaderTop>

          <PhotoContainer>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/72170223?v=4",
              }}
            />
            <PhotoButton onPress={() => {}}>
              <Feather name="camera" size={24} color={theme.colors.shape} />
            </PhotoButton>
          </PhotoContainer>
        </Header>

        <Content style={{ marginBottom: useBottomTabBarHeight() }}>
          <Options>
            <Option
              active={option === "dataEdit"}
              onPress={handleOptionChange("dataEdit")}
            >
              <OptionTitle active={option === "dataEdit"}>Dados</OptionTitle>
            </Option>
            <Option
              active={option === "passwordEdit"}
              onPress={handleOptionChange("passwordEdit")}
            >
              <OptionTitle active={option === "passwordEdit"}>
                Trocar senha
              </OptionTitle>
            </Option>
          </Options>

          {option === OptionType.DATA_EDIT && (
            <Section>
              <Input
                iconName="user"
                placeholder="Nome"
                autoCorrect={false}
                defaultValue={user.name}
              />
              <Input
                iconName="mail"
                editable={false}
                autoCorrect={false}
                defaultValue={user.email}
              />
              <Input
                iconName="credit-card"
                placeholder="CNH"
                keyboardType="numeric"
                defaultValue={user.driver_license}
              />
            </Section>
          )}

          {option === OptionType.PASSWDORD_EDIT && (
            <Section>
              <PasswordInput
                iconName="lock"
                placeholder="Senha atual"
                autoCorrect={false}
              />
              <PasswordInput
                iconName="lock"
                placeholder="nova senha"
                autoCorrect={false}
              />
              <PasswordInput
                iconName="lock"
                placeholder="Repetir senha"
                autoCorrect={false}
              />
            </Section>
          )}
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Profile;
