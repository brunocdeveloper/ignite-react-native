import React from "react";
import { Container, Header, TotalCars, HeaderContent } from "./styles";
import { StatusBar } from "react-native";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import Car from "../../components/Car";

const Home: React.FC = () => {
  const carData = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYl4rzE1_0rezfZwfkCevsxOFTfcP0YfXnoJ2lGfXH0jV-T7FyLZaQlPaguOoAr-BGbpQ&usqp=CAU",
  };

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

      <Car data={carData} />
    </Container>
  );
};

export default Home;
