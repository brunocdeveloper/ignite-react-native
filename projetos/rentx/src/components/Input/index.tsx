import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

const Input = ({ iconName }: Props) => {
  const theme = useTheme();
  return (
    <Container>
      <Feather name={iconName} size={24} color={theme.colors.text_detail} />
    </Container>
  );
};

export default Input;
