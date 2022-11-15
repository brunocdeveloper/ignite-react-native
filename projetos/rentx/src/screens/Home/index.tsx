import React from "react";
import { Container, Header, TotalCars, HeaderContent } from "./styles";
import { StatusBar } from "react-native";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Home;
