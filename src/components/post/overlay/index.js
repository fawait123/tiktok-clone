import { View, Text, Image } from "react-native";
import React from "react";
import style from "./style";

export default function Overlay({ user }) {
  console.log("user", user);
  return (
    <View style={style.container}>
      <View>
        <Text style={{ ...style.text, fontSize: 18, marginBottom: 7 }}>
          {user?.displayName}
        </Text>
        <Text style={style.text}>{user != null ? user?.email : ""}</Text>
      </View>
      <View style={style.imageContainer}>
        <Image
          source={{ uri: user != null ? user?.photoURL : "" }}
          style={style.image}
        />
      </View>
    </View>
  );
}
