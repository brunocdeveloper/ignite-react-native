import React from "react";
import { ActivityIndicator, TouchableOpacityProps, View } from "react-native";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

const Button = ({ title, color, loading, light, ...rest }: Props) => {
  return (
    <Container {...rest} color={color}>
      {loading && <ActivityIndicator color="white" />}
      {!loading && <Title light={light}>{title}</Title>}
    </Container>
  );
};

export default Button;
