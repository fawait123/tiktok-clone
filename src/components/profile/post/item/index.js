import { View, Text, Image } from "react-native";
import React from "react";
import style from "./style";

export default function ItemPost({ item }) {
  return (
    <View style={style.container}>
      <Image style={style.Image} source={{ uri: item.media[1] }} />
    </View>
  );
}
