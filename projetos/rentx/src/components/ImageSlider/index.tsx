import React from "react";
import { FlatList } from "react-native";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CardImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

const ImageSlider = ({ imagesUrl }: Props) => {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CardImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CardImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default ImageSlider;
