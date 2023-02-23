import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import style from "./style";

export default function Navbar({ user }) {
  return (
    <View style={style.container}>
      <View style={style.TopContainer}>
        <Feather name="search" size={24} color="black" />
        <Text style={style.text}>{user.email}</Text>
        <Feather name="align-justify" size={24} color="black" />
      </View>
    </View>
  );
}
