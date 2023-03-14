import React, { memo } from "react";
import { Text, View } from "react-native";

interface Props {
  data: {
    name: string;
    likes: number;
  };
}

const Friend = ({ data }: Props) => {
  return (
    <Text>
      {data.name} - Likes: {data.likes}
    </Text>
  );
};

export default memo(Friend, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
