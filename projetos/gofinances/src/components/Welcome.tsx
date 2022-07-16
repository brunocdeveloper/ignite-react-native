import React from "react";

import { Text, View } from "react-native";

import { style } from "./styles";

interface Props {
  title: string;
}

export function Welcome({ title }: Props) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
