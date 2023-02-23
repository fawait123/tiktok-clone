import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import React from "react";
import style from "./style";

export default function Header({ user }) {
  return (
    <View style={style.container}>
      <View style={style.profile}>
        <Avatar.Icon size={80} icon={"account"} />
        <Text style={style.text}>{user.email}</Text>
      </View>
      <View style={style.containerDetail}>
        <View style={style.profileDetail}>
          <Text style={style.textNumber}>0</Text>
          <Text>Following</Text>
        </View>
        <View style={style.profileDetail}>
          <Text style={style.textNumber}>0</Text>
          <Text>Likes</Text>
        </View>
        <View style={style.profileDetail}>
          <Text style={style.textNumber}>0</Text>
          <Text>Follower</Text>
        </View>
      </View>
      <View style={style.providerButton}>
        <TouchableOpacity style={style.containerButton}>
          <Text style={style.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
