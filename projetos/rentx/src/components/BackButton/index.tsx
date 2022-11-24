import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Container } from "./styles";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  color?: string;
}

const BackButton = ({ color, ...rest }: Props) => {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};

export default BackButton;
