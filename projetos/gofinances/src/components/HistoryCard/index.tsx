import React from "react-native";

import { Container, Title, Amount } from "./style";

interface Props {
  color: string;
  title: string;
  amount: string;
}

export function HystoryCard({ color, title, amount }: Props) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
