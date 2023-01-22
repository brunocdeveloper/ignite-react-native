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
import * as ImagePicker from "expo-image-picker";

enum OptionType {
  "DATA_EDIT" = "dataEdit",
  "PASSWDORD_EDIT" = "passwordEdit",
}

const Profile = () => {
  const { user, signOut } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation();

  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [diverLicense, setDiverLicense] = useState(user.driver_license);
  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignOut = () => {
    signOut();
  };

  const handleOptionChange = (option: "dataEdit" | "passwordEdit") => () => {
    setOption(option);
  };

  async function handleChangeAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.canceled) {
      return;
    }

    if (result.uri) {
      setAvatar(result.uri);
    }
  }

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
            {avatar && (
              <Photo
                source={{
                  uri: avatar,
                }}
              />
            )}
            <PhotoButton onPress={handleChangeAvatar}>
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
                onChangeText={setName}
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
                onChangeText={setDiverLicense}
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
