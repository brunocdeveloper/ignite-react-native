import React from "react";
import { View } from "react-native";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import { CarImages, Container, Header } from "./styles";

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
    </Container>
  );
};

export default CarDetails;
