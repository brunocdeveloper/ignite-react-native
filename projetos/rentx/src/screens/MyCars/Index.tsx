import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import BackButton from "../../components/BackButton";
import Car from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";
import api from "../../services/api";
import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  Header,
  Title,
  SubTitle,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  Content,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from "./styles";
import Load from "../../components/Load";
import LoadAnimation from "../../components/LoadAnimation";
import { format, parseISO } from "date-fns";

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  start_date: string;
  end_date: string;
}

const MyCars = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCArs() {
      try {
        const response = await api.get(`/rentals`);
        const dataFormatted = response.data.map((data) => {
          return {
            car: data.car,
            start_date: format(parseISO(data.start_date), "dd/MM/yyyy"),
            end_date: format(parseISO(data.end_date), "dd/MM/yyyy"),
          };
        });

        setCars(dataFormatted);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCArs();
  }, []);

  return (
    <Container>
      <Header>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"} data de início e {"\n"} fim do aluguel
        </Title>

        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>

      {loading ? (
        <LoadAnimation />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.start_date}</CarFooterDate>
                  </CarFooterPeriod>
                  <AntDesign
                    name="arrowright"
                    size={20}
                    color={theme.colors.title}
                    style={{ marginHorizontal: 10 }}
                  />
                  <CarFooterDate>{item.end_date}</CarFooterDate>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
};

export default MyCars;
