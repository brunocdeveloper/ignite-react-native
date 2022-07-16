import React from "react";
import { View, Text } from "react-native";
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
} from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/72170223?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Bruno</UserName>
            </User>
          </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  );
}
