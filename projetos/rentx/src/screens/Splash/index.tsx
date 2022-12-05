import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

import { Container } from "./styles";

const Splash = () => {
  const animation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(animation.value, {
            duration: 500,
            easing: Easing.bezier(0, 1.76, 1, -0.19),
          }),
        },
      ],
    };
  });

  function handleAnimationPosition() {
    animation.value += 100;
  }

  return (
    <Container>
      <Animated.View style={[styles.box, animatedStyles]}></Animated.View>

      <Button title="Mover" onPress={handleAnimationPosition} />
    </Container>
  );
};

export default Splash;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
