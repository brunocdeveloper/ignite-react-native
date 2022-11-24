import React, { useEffect, useState } from "react";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { StatusBar } from "react-native";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import Car from "../../components/Car";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import Load from "../../components/Load";
import { CarDTO } from "../../dtos/CarDTO";
import { CarDetailsProps } from "../../routes/stack.routes";

const Home = () => {
  const navigation = useNavigation<CarDetailsProps>();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
