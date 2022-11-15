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

const Car: React.FC = () => {
  return (
    <Container>
      <Details>
        <Brand>Audi</Brand>
        <Name>RS 5 Coupé</Name>

        <About>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: "" }} />
    </Container>
  );
};

export default Car;
