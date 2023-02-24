import { View, Text, Image } from "react-native";
import React from "react";
import style from "./style";

export default function Item({ item }) {
  return (
    <View style={style.container}>
      <Text>{item.email}</Text>
      <View style={style.containerImage}>
        <Image source={{ uri: item.photoURL }} style={style.Image} />
      </View>
    </View>
  );
}
