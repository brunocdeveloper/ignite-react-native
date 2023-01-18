import React from "react";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Period,
  Price,
  Type,
  CarImage,
  Rent,
} from "./styles";
import GasolineSvg from "../../assets/gasoline.svg";
import { TouchableOpacityProps } from "react-native";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface Props extends TouchableOpacityProps {
  data: CarDTO;
}

const Car = ({ data, ...rest }: Props) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} />
    </Container>
  );
};

export default Car;
