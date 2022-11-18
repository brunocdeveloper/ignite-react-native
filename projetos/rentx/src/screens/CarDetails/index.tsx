import React from "react";
import { View } from "react-native";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import {
  CarImages,
  Container,
  Header,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
} from "./styles";

const CarDetails = () => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYl4rzE1_0rezfZwfkCevsxOFTfcP0YfXnoJ2lGfXH0jV-T7FyLZaQlPaguOoAr-BGbpQ&usqp=CAU",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
};

export default CarDetails;
