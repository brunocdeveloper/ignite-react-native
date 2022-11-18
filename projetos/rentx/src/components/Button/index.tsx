import React from "react";
import { View } from "react-native";

import { Container, Title } from "./styles";

interface Props {
  title: string;
  color?: string;
}

const Button = ({ title, color, ...rest }: Props) => {
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
