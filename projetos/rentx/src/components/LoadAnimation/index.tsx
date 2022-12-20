import React from "react";
import { View } from "react-native";
import { Container } from "./styles";
import LottieView from "lottie-react-native";
import loadingCar from "../../assets/load_animated.json";

const LoadAnimation = () => {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        style={{ height: 200 }}
        autoPlay
        resizeMode="contain"
        loop
      />
    </Container>
  );
};

export default LoadAnimation;
