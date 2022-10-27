import React from "react";
import { TouchableOpacityProps, View } from "react-native";
import { SvgProps } from "react-native-svg";

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

import { Button, ImagemContainer, Text } from "./styles";

const SignInSocialButton = ({ title, svg: Svg, ...rest }: Props) => {
  return (
    <Button {...rest}>
      <ImagemContainer>
        <Svg />
      </ImagemContainer>

      <Text>{title}</Text>
    </Button>
  );
};

export default SignInSocialButton;
