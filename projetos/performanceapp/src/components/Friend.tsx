import React, { memo } from "react";
import { Text, View } from "react-native";
import lodash from "lodash";

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
  return lodash.isEqual(prevProps.data, nextProps.data);
});
