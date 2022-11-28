import React, { useState } from "react";
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
  Content,
  Footer,
} from "./styles";
import { StatusBar } from "expo-status-bar";
import Button from "../../components/Button";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps,
} from "../../components/Calendar";
import { getPlatformDate } from "../../utils/getPlataformDate";
import { format } from "date-fns";
import { Alert } from "react-native";
import { SchedulingDetailsProps } from "../../routes/stack.routes";
import { CarDTO } from "../../dtos/CarDTO";

interface RentalPeriodTypes {
  startFormatted: string;
  endFormatted: string;
}

type ParamList = {
  param: {
    car: CarDTO;
  };
};

const Scheduling = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>();
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodTypes>(
    {} as RentalPeriodTypes
  );
  const theme = useTheme();
  const navigation = useNavigation<SchedulingDetailsProps>();
  const route = useRoute<RouteProp<ParamList>>();
  const { car } = route.params;

  function handleConfirmRental() {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert("Selecione o intervalo para alugar.");
      return;
    }
    return navigation.navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDates),
    });
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate?.timestamp ? date : lastSelectedDate;
    let end = date;
    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(
        getPlatformDate(new Date(firstDate)),
        "dd/MM/yyyy"
      ),
      endFormatted: format(getPlatformDate(new Date(endDate)), "dd/MM/yyyy"),
    });
  }

  return (
    <Container>
      <Header>
        <StatusBar translucent style="light" backgroundColor="transparent" />
        <BackButton onPress={handleBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"} data de início e {"\n"} fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
};

export default Scheduling;
