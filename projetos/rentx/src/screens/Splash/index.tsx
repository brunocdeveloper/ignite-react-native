import React, { useEffect } from "react";
import { Button, StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import LogoSvg from "../../assets/logo.svg";
import BrandSvg from "../../assets/brand.svg";

import { Container } from "./styles";

const Splash = () => {
  const splashAniomation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      splashAniomation.value,
      [0, 50],
      [1, 0],
      Extrapolate.CLAMP
    ),
    transform: [
      {
        translateX: interpolate(
          splashAniomation.value,
          [0, 5],
          [0, -50],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  const logostyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      splashAniomation.value,
      [0, 25, 50],
      [0, 0.3, 1],
      Extrapolate.CLAMP
    ),
    transform: [
      {
        translateX: interpolate(
          splashAniomation.value,
          [0, 50],
          [-50, 0],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  useEffect(() => {
    splashAniomation.value = withTiming(50, { duration: 3000 });
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={logostyle}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
};

export default Splash;
