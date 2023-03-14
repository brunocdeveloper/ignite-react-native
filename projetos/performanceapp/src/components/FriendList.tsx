import React, { useMemo } from "react";
import { Text, View } from "react-native";
import Friend from "./Friend";

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
}

const FriendList = ({ data }: Props) => {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>

      {data.map((friend) => (
        <Friend key={friend.id} data={friend} />
      ))}
    </View>
  );
};

export default FriendList;
