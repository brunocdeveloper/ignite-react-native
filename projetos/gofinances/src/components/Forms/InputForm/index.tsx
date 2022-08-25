import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { TextInputProps, View } from "react-native";
import { Input } from "../Input";

import { Container, Error } from "./styles";

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: any;
}

const InputForm = ({ control, name, error, ...rest }: Props) => {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default InputForm;
