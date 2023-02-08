import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const Profile = () => {
  return (
    <View>
      <Text testID="text-title">Perfil</Text>
      <TextInput
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
        value="bruno"
      />

      <TextInput
        testID="input-surname"
        placeholder="Sobrenome"
        value="candido"
      />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
};

export default Profile;
