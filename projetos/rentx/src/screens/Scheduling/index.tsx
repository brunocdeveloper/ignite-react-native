import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import BackButton from "../../components/BackButton";
import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
} from "./styles";
import { StatusBar } from "expo-status-bar";

const Scheduling = () => {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar translucent style="light" backgroundColor="transparent" />
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"} data de início e {"\n"} fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
    </Container>
  );
};

export default Scheduling;
