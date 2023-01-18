import React, { useEffect } from "react";
import { Button, StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
  Extrapolate,
} from "react-native-reanimated";
import LogoSvg from "../../assets/logo.svg";
import BrandSvg from "../../assets/brand.svg";

import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../routes/auth.routes";

const Splash = () => {
  const splashAniomation = useSharedValue(0);
  const navigation = useNavigation<NavigationProps>();

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
          [0, 50],
          [-20, -100],
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
          [-30, 0],
          Extrapolate.CLAMP
        ),
      },
    ],
  }));

  function startApp() {
    navigation.navigate("SignIn");
  }

  useEffect(() => {
    splashAniomation.value = withTiming(50, { duration: 2000 }, () => {
      "worklet";
      runOnJS(startApp)();
    });
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
