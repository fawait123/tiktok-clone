import { View, Text, Image } from "react-native";
import React from "react";
import style from "./style";

export default function Overlay({ user }) {
  return (
    <View style={style.container}>
      <View>
        <Text style={{ ...style.text, fontSize: 18, marginBottom: 7 }}>
          {user?.displayName}
        </Text>
        <Text style={style.text}>{user?.email}</Text>
      </View>
      <View style={style.imageContainer}>
        <Image source={{ uri: user?.photoURL }} style={style.image} />
      </View>
    </View>
  );
}
